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
