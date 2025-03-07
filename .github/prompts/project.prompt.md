# Copilot Instructions for Syncfusion Dashboard

## **Project Overview**

This is a **modern React dashboard** built using:

- **React 19**
- **Syncfusion UI components** for tables, buttons, and charts.
- **React Router** for navigation with code-splitting.
- **React Query** for efficient API requests. @tanstack/react-query
- **Tailwind CSS** for styling.
- **Vite** for fast builds and hot module replacement.

## **Coding Guidelines**

1. **Use TypeScript** for all files (`.tsx` instead of `.js`).
2. **Use functional components** and hooks (`useState`, `useEffect`, `useQuery`, etc.).
3. **Keep components reusable**. Use props for dynamic data.
4. **Use Syncfusion components** instead of manually styled elements.
5. **Favor Tailwind classes** over inline styles or separate `.css` files.
6. **Follow React best practices**, including:

   ### Card Components with Tailwind CSS

   For simple card layouts, use Tailwind CSS classes as shown in the example below. This approach is flexible and easily customizable:

   ```
   <div class="e-card">                    <!-- Root Element -->
      <div class="e-card-header">           <!-- Root Header Element -->
         <div class="e-card-header-caption">  <!-- Root Heading Element -->
            <div class="e-card-header-title"></div> <!-- Heading Title Element -->
         </div>
         <div class="e-card-content"></div>    <!-- Card Content Element -->
      </div>
   </div>
   ```

   Additionally, remember to use hooks like `useMemo` and `useCallback` for expensive calculations to keep your application performant.

   - Ensure **code splitting** by dynamically importing pages.

   ## **Project Details**

   This project is a loans performance dashboard, designed to showcase Syncfusion's styling and charting capabilities. It includes:

   - A **Dashboard** for real-time performance data.
   - A **Profile Page** for user information.
   - A **Login** page for secure access.

   The goal is to wow viewers by demonstrating the modern and dynamic design of Syncfusion components.

```plaintext
src/
│── components/    # Reusable UI components
│── pages/         # Route-based pages (Dashboard, Reports, etc.)
│── hooks/         # Custom hooks (API fetching, local storage)
│── utils/         # Helper functions
│── styles/        # Tailwind or custom styles if needed
```
