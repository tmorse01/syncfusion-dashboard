import React, { createContext, useContext, useState, useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

type Theme = "tailwind" | "material" | "bootstrap5" | "fabric";

// Mapping for CDN URLs
const themeURLs: Record<Theme, string> = {
  tailwind: "https://cdn.syncfusion.com/ej2/28.1.33/tailwind3.css",
  material: "https://cdn.syncfusion.com/ej2/27.1.48/material3.css",
  bootstrap5: "https://cdn.syncfusion.com/ej2/27.1.48/bootstrap5.3.css",
  fabric: "https://cdn.syncfusion.com/ej2/27.1.48/fabric.css",
};

interface ThemeContextType {
  currentTheme: Theme;
  changeTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Helper to fetch CSS using native fetch API, cached via react-query.
const fetchCss = (theme: Theme): Promise<string> => {
  const url = themeURLs[theme];
  if (!url) return Promise.reject("No URL found for theme");
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch CSS: ${response.statusText}`);
    }
    return response.text();
  });
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>("tailwind");
  const queryClient = useQueryClient();

  const changeTheme = (theme: Theme) => {
    // Fetch (or use cached) CSS via react-query.
    queryClient
      .fetchQuery({
        queryKey: ["themeCSS", theme],
        queryFn: () => fetchCss(theme),
      })
      .then((css: string) => {
        const styleTag: HTMLElement | null = document.getElementById("theme");
        if (styleTag) {
          styleTag.innerHTML = `/*${theme}*/${css}`;
        }
      })
      .catch((error) => {
        console.error("Failed to fetch theme CSS", error);
      });
    setCurrentTheme(theme);
  };

  useEffect(() => {
    changeTheme(currentTheme);
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
