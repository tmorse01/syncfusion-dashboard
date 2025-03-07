/**
 * Register all necessary Syncfusion components and themes
 */
import { registerLicense } from "@syncfusion/ej2-base";

// Register Syncfusion license key
// Replace this with your actual license key when deploying to production
export const registerSyncfusionLicense = () => {
  // For development purposes, using the free community license
  // For production, use your purchased license key
  registerLicense(
    "Ngo9BigBOggjHTQxAR8/V1NMaF1cXmhKYVJyWmFZfVtgdVdMZFVbQHBPMyBoS35Rc0VgWXhecHBcQmZcUUVy"
  );
};

// Import required CSS for Syncfusion themes
export const loadSyncfusionThemes = () => {
  // Material theme (you can change to other themes like 'bootstrap', 'fabric', etc.)
  import("@syncfusion/ej2-react-buttons/styles/material.css");
  //   import("@syncfusion/ej2-react-calendars/styles/material.css");
  //   import("@syncfusion/ej2-react-dropdowns/styles/material.css");
  import("@syncfusion/ej2-react-inputs/styles/material.css");
  import("@syncfusion/ej2-react-navigations/styles/material.css");
  import("@syncfusion/ej2-react-popups/styles/material.css");
  //   import("@syncfusion/ej2-react-schedule/styles/material.css");
  import("@syncfusion/ej2-react-grids/styles/material.css");
  //   import("@syncfusion/ej2-react-charts/styles/material.css");
  //   import("@syncfusion/ej2-react-notifications/styles/material.css");
  import("@syncfusion/ej2-layouts/styles/material.css");
};
