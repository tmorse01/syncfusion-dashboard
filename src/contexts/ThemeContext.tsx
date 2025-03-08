import React, { createContext, useContext, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import LoadingSpinner from "../components/LoadingSpinner";

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
  changeTheme: (theme: Theme) => Promise<void>;
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const changeTheme = (theme: Theme): Promise<void> => {
    // If the theme is tailwind, skip fetching as it's imported in index.html.
    if (theme === "tailwind") {
      const styleTag: HTMLElement | null = document.getElementById("theme");
      if (styleTag) {
        styleTag.innerHTML = ""; // Clear any previously fetched CSS
      }
      setCurrentTheme(theme);
      return Promise.resolve();
    }
    setIsLoading(true);
    return queryClient
      .fetchQuery({
        queryKey: ["themeCSS", theme],
        queryFn: () => fetchCss(theme),
      })
      .then((css: string) => {
        const styleTag: HTMLElement | null = document.getElementById("theme");
        if (styleTag) {
          styleTag.innerHTML = `/*${theme}*/${css}`;
        }
        setCurrentTheme(theme);
      })
      .catch((error) => {
        console.error("Failed to fetch theme CSS", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    if (currentTheme !== "tailwind") {
      changeTheme(currentTheme);
    }
  }, []);

  if (isLoading) return <LoadingSpinner />;

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
