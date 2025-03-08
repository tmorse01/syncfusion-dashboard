import React, { createContext, useContext, useState, useEffect } from "react";
import { addClass, removeClass } from "@syncfusion/ej2-base";

type Theme = "tailwind" | "material" | "bootstrap5" | "fabric";

interface ThemeContextType {
  currentTheme: Theme;
  changeTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("tailwind");

  const getThemeClass = (theme: Theme) => {
    const themeMap = {
      tailwind: "e-tailwind",
      material: "e-material",
      bootstrap5: "e-bootstrap5",
      fabric: "e-fabric",
    };
    return themeMap[theme];
  };

  const changeTheme = (theme: Theme) => {
    const oldThemeClass = getThemeClass(currentTheme);
    const newThemeClass = getThemeClass(theme);

    removeClass([document.body], [oldThemeClass]);
    addClass([document.body], [newThemeClass]);
    document.body.setAttribute("data-theme", theme);
    setCurrentTheme(theme);
  };

  useEffect(() => {
    const themeClass = getThemeClass(currentTheme);
    addClass([document.body], [themeClass]);
    document.body.setAttribute("data-theme", currentTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
