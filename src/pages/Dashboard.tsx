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
      <div className="flex items-center justify-center h-64">
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
      <div className="p-6 e-card-header">
        <div className="e-card-header-caption">
          <div className="text-sm text-white e-card-header-title opacity-80">
            {title}
          </div>
        </div>
        <div className="e-card-content">
          <div className="text-2xl font-bold text-white">
            {value.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Loan Disbursement Trends
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Total amount disbursed per month
          </p>
        </div>
        <ChartComponent
          primaryXAxis={{
            valueType: "Category",
            title: "Month",
            labelStyle: {
              color: "#4b5563",
              fontFamily: "Inter, sans-serif",
              size: "14px",
            },
            titleStyle: {
              color: "#374151",
              fontFamily: "Inter, sans-serif",
              size: "14px",
            },
            majorGridLines: { width: 0 },
            border: { width: 0 },
          }}
          primaryYAxis={{
            title: "Amount ($)",
            labelFormat: "${value}",
            titleStyle: {
              color: "#374151",
              fontFamily: "Inter, sans-serif",
              size: "14px",
            },
            labelStyle: {
              color: "#4b5563",
              fontFamily: "Inter, sans-serif",
              size: "14px",
            },
            rangePadding: "Additional",
            majorGridLines: { width: 1, color: "#e5e7eb" },
          }}
          chartArea={{ border: { width: 0 } }}
          tooltip={{
            enable: true,
            shared: true,
            format: "${series.name}: ${point.y}",
            textStyle: { color: "#fff", fontFamily: "Inter, sans-serif" },
          }}
          height="350px"
          background="#ffffff"
          palettes={["#4f46e5"]}
          legendSettings={{
            visible: true,
            position: "Bottom",
            textStyle: { color: "#4b5563", fontFamily: "Inter, sans-serif" },
          }}
          width="100%"
          className="font-sans"
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
              marker={{
                visible: true,
                height: 8,
                width: 8,
                shape: "Circle",
                fill: "#4f46e5",
              }}
              width={2.5}
              opacity={1}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
      <div className="p-6 bg-white rounded-lg shadow">
        <h3 className="mb-4 text-xl font-semibold">Recent Loans</h3>
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
