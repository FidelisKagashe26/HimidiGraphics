"use client";
import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  isLightMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isLightMode: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("himidi-theme");
    
    const applyTheme = (light: boolean) => {
      setIsLightMode(light);
      if (light) {
        document.documentElement.classList.add("light-mode");
      } else {
        document.documentElement.classList.remove("light-mode");
      }
    };

    if (saved === "light" || saved === "dark") {
      applyTheme(saved === "light");
    } else {
      // Auto mode based on time
      const checkTime = () => {
        const hour = new Date().getHours();
        applyTheme(hour >= 6 && hour < 18);
      };
      checkTime();
      
      const interval = setInterval(() => {
        // Only update if they haven't manually overridden it
        if (!localStorage.getItem("himidi-theme")) {
          checkTime();
        }
      }, 60000);
      return () => clearInterval(interval);
    }
  }, []);

  const toggleTheme = () => {
    const newThemeLight = !isLightMode;
    setIsLightMode(newThemeLight);
    localStorage.setItem("himidi-theme", newThemeLight ? "light" : "dark");
    
    if (newThemeLight) {
      document.documentElement.classList.add("light-mode");
    } else {
      document.documentElement.classList.remove("light-mode");
    }
  };

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
