import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  LineSeries,
  Category,
  Legend,
  Tooltip,
  Inject,
  DataLabel,
} from "@syncfusion/ej2-react-charts";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

// Mock API call - replace with your real API
const fetchLoanData = async () => {
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock data
  return {
    totalLoans: 1245,
    activeLoans: 876,
    defaultedLoans: 89,
    completedLoans: 280,
    loanTrends: [
      { month: "Jan", amount: 1200000 },
      { month: "Feb", amount: 1350000 },
      { month: "Mar", amount: 1500000 },
      { month: "Apr", amount: 1400000 },
      { month: "May", amount: 1600000 },
      { month: "Jun", amount: 1750000 },
    ],
    recentLoans: [
      {
        id: 1,
        borrower: "John Smith",
        amount: 25000,
        status: "Active",
        date: "2023-01-15",
      },
      {
        id: 2,
        borrower: "Sarah Johnson",
        amount: 15000,
        status: "Completed",
        date: "2023-02-20",
      },
      {
        id: 3,
        borrower: "Michael Brown",
        amount: 50000,
        status: "Active",
        date: "2023-03-05",
      },
      {
        id: 4,
        borrower: "Emily Davis",
        amount: 10000,
        status: "Defaulted",
        date: "2023-01-30",
      },
      {
        id: 5,
        borrower: "David Wilson",
        amount: 30000,
        status: "Active",
        date: "2023-02-10",
      },
    ],
  };
};

const Dashboard: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["loanData"],
    queryFn: fetchLoanData,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-64">
        Loading dashboard data...
      </div>
    );
  if (error)
    return <div className="text-red-500">Error loading dashboard data</div>;
  if (!data) return null;

  const {
    totalLoans,
    activeLoans,
    defaultedLoans,
    completedLoans,
    loanTrends,
    recentLoans,
  } = data;

  // Stats card
  const StatCard = ({
    title,
    value,
    bgColor,
  }: {
    title: string;
    value: number;
    bgColor: string;
  }) => (
    <div className={`e-card ${bgColor} text-white shadow-md`}>
      <div className="e-card-header p-6">
        <div className="e-card-header-caption">
          <div className="e-card-header-title text-sm opacity-80">{title}</div>
        </div>
        <div className="e-card-content">
          <div className="text-2xl font-bold">{value.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Loans"
          value={totalLoans}
          bgColor="bg-blue-600"
        />
        <StatCard
          title="Active Loans"
          value={activeLoans}
          bgColor="bg-green-600"
        />
        <StatCard
          title="Defaulted Loans"
          value={defaultedLoans}
          bgColor="bg-red-600"
        />
        <StatCard
          title="Completed Loans"
          value={completedLoans}
          bgColor="bg-purple-600"
        />
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Loan Disbursement Trends</h3>
        <ChartComponent
          primaryXAxis={{
            valueType: "Category",
            title: "Month",
          }}
          primaryYAxis={{
            title: "Amount ($)",
            labelFormat: "${value}",
          }}
          tooltip={{ enable: true }}
          height="350px"
        >
          <Inject
            services={[LineSeries, Category, Legend, Tooltip, DataLabel]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              type="Line"
              dataSource={loanTrends}
              xName="month"
              yName="amount"
              name="Loan Amount"
              marker={{ visible: true }}
              width={2}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-xl font-semibold mb-4">Recent Loans</h3>
        <GridComponent
          dataSource={recentLoans}
          allowPaging={true}
          pageSettings={{ pageSize: 5 }}
          allowSorting={true}
        >
          <ColumnsDirective>
            <ColumnDirective field="id" headerText="Loan ID" width="100" />
            <ColumnDirective
              field="borrower"
              headerText="Borrower"
              width="150"
            />
            <ColumnDirective
              field="amount"
              headerText="Amount"
              width="120"
              format="C0"
              textAlign="Right"
            />
            <ColumnDirective field="status" headerText="Status" width="120" />
            <ColumnDirective
              field="date"
              headerText="Date"
              width="130"
              format="yMd"
            />
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter]} />
        </GridComponent>
      </div>
    </div>
  );
};

export default Dashboard;
