import { createContext, PropsWithChildren, useContext, useState } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useColorScheme } from "nativewind";

interface ThemeChangerContextType {
  currentTheme: "light" | "dark";
  isSystemTheme: boolean;

  toggleTheme: () => void;
  setSystemTheme: () => void;
}

const ThemeChangerContext = createContext({} as ThemeChangerContextType);

export const useThemeChangerContext = () => {
  const themeChanger = useContext(ThemeChangerContext);
  return themeChanger;
};

export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");
  const [isSystemThemeEnabled, setIsSystemThemeEnabled] = useState(true);

  const currentTheme = isSystemThemeEnabled
    ? colorScheme
    : isDarkMode
    ? "dark"
    : "light";

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ThemeChangerContext.Provider
        value={{
          currentTheme: currentTheme ?? "light",
          isSystemTheme: isSystemThemeEnabled,
          toggleTheme: async () => {
            setIsDarkMode(!isDarkMode);
            setIsSystemThemeEnabled(false);
            setColorScheme(isDarkMode ? "light" : "dark");
          },
          setSystemTheme: async () => {
            setIsSystemThemeEnabled(true);
            setColorScheme("system");
          },
        }}
      >
        {children}
      </ThemeChangerContext.Provider>
    </ThemeProvider>
  );
};
