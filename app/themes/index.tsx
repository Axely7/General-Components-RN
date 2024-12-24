import { View, Text } from "react-native";
import ThemedView from "../../presentation/shared/ThemedView";
import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import { useState } from "react";
import { useThemeChangerContext } from "../../presentation/context/ThemeChangerContext";

const ThemesScreen = () => {
  const { toggleTheme, currentTheme, setSystemTheme, isSystemTheme } =
    useThemeChangerContext();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: currentTheme === "dark",
    systemMode: isSystemTheme,
  });

  const setDarkMode = (value: boolean) => {
    toggleTheme();
    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    });
  };

  const setSystemMode = (value: boolean) => {
    if (value) {
      setSystemTheme();
    }

    setDarkModeSettings({
      darkMode: darkModeSettings.darkMode,
      systemMode: value,
    });
  };

  return (
    <ThemedView margin>
      <ThemedCard className="mt-5">
        <ThemedSwitch
          text="Dark Mode"
          className="mb-5"
          value={darkModeSettings.darkMode}
          onValueChange={setDarkMode}
        />
        <ThemedSwitch
          text="System Mode"
          value={darkModeSettings.systemMode}
          onValueChange={setSystemMode}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
