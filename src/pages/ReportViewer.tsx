import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  Annotation,
  Inject,
} from "@syncfusion/ej2-react-pdfviewer";

// Collection of public sample PDFs for demonstration
const publicPdfs = [
  {
    id: "pdfsuccinctly",
    title: "PDF Succinctly",
    path: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
    description: "A comprehensive guide to PDF technology",
  },
  {
    id: "javascriptsuccinctly",
    title: "JavaScript Succinctly",
    path: "https://cdn.syncfusion.com/content/pdf/javascript-succinctly.pdf",
    description: "Learn the fundamentals of JavaScript programming",
  },
  {
    id: "reactsuccinctly",
    title: "React.js Succinctly",
    path: "https://cdn.syncfusion.com/content/pdf/reactjs-succinctly.pdf",
    description: "Introduction to React.js library and its core concepts",
  },
  {
    id: "http",
    title: "HTTP Succinctly",
    path: "https://cdn.syncfusion.com/content/pdf/http-succinctly.pdf",
    description: "Understanding HTTP protocols and web communication",
  },
  {
    id: "aspnetcore",
    title: "ASP.NET Core Succinctly",
    path: "https://cdn.syncfusion.com/content/pdf/asp-net-core-succinctly.pdf",
    description: "Guide to building web applications with ASP.NET Core",
  },
];

// Get report data based on ID
const getReportData = (id: string) => {
  // Try to find the report in our collection
  const foundReport = publicPdfs.find((pdf) => pdf.id === id);

  // If we found a matching report, return it
  if (foundReport) {
    return foundReport;
  }

  // If not found by exact ID, return the first one as a fallback
  return {
    id: "default",
    title: "Sample PDF Document",
    path: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
    description: "A sample PDF document for demonstration purposes.",
  };
};

const ReportViewer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const reportData = getReportData(id || "");

  // Configuration for the PDF viewer service
  const serviceUrl =
    "https://ej2services.syncfusion.com/production/web-services/api/pdfviewer";

  const handleBackToReports = () => {
    navigate("/reports");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {reportData.title}
          </h2>
          <p className="text-sm text-gray-600">{reportData.description}</p>
          <p className="text-xs text-blue-600 mt-1">
            Using Syncfusion's public PDF viewer service
          </p>
        </div>
        <ButtonComponent
          cssClass="e-btn e-outline"
          onClick={handleBackToReports}
          iconCss="e-icons e-arrow-left"
        >
          Back to Reports
        </ButtonComponent>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-lg h-[700px]">
        <PdfViewerComponent
          id="pdfViewer"
          documentPath={reportData.path}
          serviceUrl={serviceUrl}
          height="100%"
          enableNavigation={true}
          enableToolbar={true}
          enableThumbnail={true}
          enableAnnotation={false}
        >
          <Inject
            services={[
              Toolbar,
              Magnification,
              Navigation,
              LinkAnnotation,
              BookmarkView,
              ThumbnailView,
              Print,
              TextSelection,
              Annotation,
            ]}
          />
        </PdfViewerComponent>
      </div>
    </div>
  );
};

export default ReportViewer;
