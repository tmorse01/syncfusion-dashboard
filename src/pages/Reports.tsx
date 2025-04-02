import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FileManagerComponent,
  NavigationPane,
  DetailsView,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-filemanager";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";

const Reports: React.FC = () => {
  const navigate = useNavigate();
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  // Use Syncfusion's Azure demo service for FileManager
  const hostUrl = "https://ej2-aspcore-service.azurewebsites.net/";

  // File manager AJAX settings
  const ajaxSettings = {
    url: hostUrl + "api/FileManager/FileOperations",
    getImageUrl: hostUrl + "api/FileManager/GetImage",
    uploadUrl: hostUrl + "api/FileManager/Upload",
    downloadUrl: hostUrl + "api/FileManager/Download",
  };

  // Handle file selection
  const onFileSelected = (args: any) => {
    if (args.fileDetails && args.fileDetails.isFile) {
      // Extract the name from the file for demo purposes
      const fileName = args.fileDetails.name;

      // Check if it's a PDF file
      if (fileName.toLowerCase().endsWith(".pdf")) {
        // Use the filename without extension as the report ID
        const fileNameWithoutExt = fileName.replace(/\.[^/.]+$/, "");
        // Convert to a simpler ID format
        const reportId = fileNameWithoutExt.toLowerCase().replace(/\s+/g, "");
        setSelectedReport(reportId);
      } else {
        setSelectedReport(null);
      }
    } else {
      setSelectedReport(null);
    }
  };

  // Handle view report
  const handleViewReport = () => {
    if (selectedReport) {
      navigate(`/report/${selectedReport}`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Reports Library
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Browse and view loan performance reports
            <span className="text-blue-600 ml-1">
              (Using Syncfusion Azure Demo Service)
            </span>
          </p>
        </div>

        <div className="h-[500px] relative">
          <FileManagerComponent
            id="filemanager"
            view="Details"
            height="100%"
            ajaxSettings={ajaxSettings}
            fileOpen={onFileSelected}
            enablePersistence={true}
          >
            <Inject services={[NavigationPane, DetailsView, Toolbar]} />
          </FileManagerComponent>
        </div>

        <div className="mt-4 flex justify-end">
          <ButtonComponent
            cssClass={`e-btn ${selectedReport ? "e-primary" : "e-disabled"}`}
            disabled={!selectedReport}
            onClick={handleViewReport}
          >
            View Selected Report
          </ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default Reports;
