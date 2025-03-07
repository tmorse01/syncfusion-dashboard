# Syncfusion Package Installation Guide

Run the following command in your project root to install all the required Syncfusion packages:

```bash
npm install @syncfusion/ej2-base @syncfusion/ej2-react-base @syncfusion/ej2-react-buttons @syncfusion/ej2-react-inputs @syncfusion/ej2-react-popups @syncfusion/ej2-react-calendars @syncfusion/ej2-react-dropdowns @syncfusion/ej2-react-navigations @syncfusion/ej2-react-grids @syncfusion/ej2-react-charts @syncfusion/ej2-react-notifications @syncfusion/ej2-react-schedule
```

## Included Packages

This installation includes the following Syncfusion components:

1. **Base Libraries**

   - `@syncfusion/ej2-base`: Core functionality
   - `@syncfusion/ej2-react-base`: React wrappers for core components

2. **UI Components**
   - `@syncfusion/ej2-react-buttons`: Buttons, CheckBoxes, RadioButtons
   - `@syncfusion/ej2-react-inputs`: TextBox, NumericTextBox, Input components
   - `@syncfusion/ej2-react-popups`: Dialog, Tooltip, Popups
   - `@syncfusion/ej2-react-calendars`: Calendar, DatePicker, DateTimePicker
   - `@syncfusion/ej2-react-dropdowns`: DropDownList, ComboBox, MultiSelect
   - `@syncfusion/ej2-react-navigations`: Menu, Toolbar, Sidebar, TreeView
   - `@syncfusion/ej2-react-grids`: DataGrid, TreeGrid
   - `@syncfusion/ej2-react-charts`: Charts, Gauges, Range Navigator
   - `@syncfusion/ej2-react-notifications`: Toast, Badges
   - `@syncfusion/ej2-react-schedule`: Scheduler

## Card Component Usage

The Card component is implemented using CSS classes from the Syncfusion styles:

```jsx
<div className="e-card">
  <div className="e-card-header">
    <div className="e-card-header-caption">
      <div className="e-card-header-title">Card Title</div>
    </div>
  </div>
  <div className="e-card-content">Card content goes here</div>
</div>
```

This approach is simpler and more React-friendly than using the JavaScript API.

After installation, you can import styles and components as needed in your application.
