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

  return (
    <div>
      <DropDownListComponent
        dataSource={themes}
        fields={{ text: "text", value: "value" }}
        value={currentTheme}
        change={(e) => changeTheme(e.value)}
        width="150px"
      />
    </div>
  );
};
