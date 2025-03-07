import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Import Syncfusion styles
import "@syncfusion/ej2-base/styles/tailwind.css";
import "@syncfusion/ej2-buttons/styles/tailwind.css";
import "@syncfusion/ej2-dropdowns/styles/tailwind.css";
import "@syncfusion/ej2-grids/styles/tailwind.css";
import "@syncfusion/ej2-inputs/styles/tailwind.css";
import "@syncfusion/ej2-layouts/styles/tailwind.css";
import "@syncfusion/ej2-navigations/styles/tailwind.css";
import "@syncfusion/ej2-popups/styles/tailwind.css";
import "@syncfusion/ej2-schedule/styles/tailwind.css";

// Import and initialize Syncfusion components
import {
  registerSyncfusionLicense,
  // loadSyncfusionThemes,
} from "./utils/syncfusion-register";

try {
  // Register Syncfusion license
  registerSyncfusionLicense();

  // Load Syncfusion themes
  // loadSyncfusionThemes();
} catch (error) {
  console.error("Failed to initialize Syncfusion:", error);
}

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error(
    "Root element not found. Check your HTML file for an element with id 'root'"
  );
} else {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
