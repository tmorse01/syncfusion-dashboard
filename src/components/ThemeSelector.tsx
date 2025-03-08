import React from "react";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { useTheme } from "../contexts/ThemeContext";

const themes = [
  { text: "Tailwind", value: "tailwind" },
  { text: "Material", value: "material" },
  { text: "Bootstrap 5", value: "bootstrap5" },
  { text: "Fabric", value: "fabric" },
];

export const ThemeSelector: React.FC = () => {
  const { currentTheme, changeTheme } = useTheme();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleThemeChange = (e: any) => {
    changeTheme(e.itemData.value);
  };

  return (
    <div>
      <DropDownListComponent
        dataSource={themes}
        fields={{ text: "text", value: "value" }}
        value={currentTheme}
        change={handleThemeChange}
        width="150px"
      />
    </div>
  );
};
