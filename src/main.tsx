import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Material Theme
import "@syncfusion/ej2-base/styles/material.css";
import "@syncfusion/ej2-buttons/styles/material.css";
import "@syncfusion/ej2-dropdowns/styles/material.css";
import "@syncfusion/ej2-grids/styles/material.css";
import "@syncfusion/ej2-inputs/styles/material.css";
import "@syncfusion/ej2-layouts/styles/material.css";
import "@syncfusion/ej2-navigations/styles/material.css";
import "@syncfusion/ej2-popups/styles/material.css";
import "@syncfusion/ej2-schedule/styles/material.css";

// Tailwind Theme
import "@syncfusion/ej2-base/styles/tailwind.css";
import "@syncfusion/ej2-buttons/styles/tailwind.css";
import "@syncfusion/ej2-dropdowns/styles/tailwind.css";
import "@syncfusion/ej2-grids/styles/tailwind.css";
import "@syncfusion/ej2-inputs/styles/tailwind.css";
import "@syncfusion/ej2-layouts/styles/tailwind.css";
import "@syncfusion/ej2-navigations/styles/tailwind.css";
import "@syncfusion/ej2-popups/styles/tailwind.css";
import "@syncfusion/ej2-schedule/styles/tailwind.css";

// Bootstrap 5 Theme
import "@syncfusion/ej2-base/styles/bootstrap5.css";
import "@syncfusion/ej2-buttons/styles/bootstrap5.css";
import "@syncfusion/ej2-dropdowns/styles/bootstrap5.css";
import "@syncfusion/ej2-grids/styles/bootstrap5.css";
import "@syncfusion/ej2-inputs/styles/bootstrap5.css";
import "@syncfusion/ej2-layouts/styles/bootstrap5.css";
import "@syncfusion/ej2-navigations/styles/bootstrap5.css";
import "@syncfusion/ej2-popups/styles/bootstrap5.css";
import "@syncfusion/ej2-schedule/styles/bootstrap5.css";

// Fabric Theme
import "@syncfusion/ej2-base/styles/fabric.css";
import "@syncfusion/ej2-buttons/styles/fabric.css";
import "@syncfusion/ej2-dropdowns/styles/fabric.css";
import "@syncfusion/ej2-grids/styles/fabric.css";
import "@syncfusion/ej2-inputs/styles/fabric.css";
import "@syncfusion/ej2-layouts/styles/fabric.css";
import "@syncfusion/ej2-navigations/styles/fabric.css";
import "@syncfusion/ej2-popups/styles/fabric.css";
import "@syncfusion/ej2-schedule/styles/fabric.css";

import { registerSyncfusionLicense } from "./utils/syncfusion-register";
import { ThemeProvider } from "./contexts/ThemeContext";

try {
  registerSyncfusionLicense();
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
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
}
