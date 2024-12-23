import { View, Text } from "react-native";
import ThemedView from "../../presentation/shared/ThemedView";
import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import { useState } from "react";
import { useColorScheme } from "../../hooks/useColorScheme.web";

const ThemesScreen = () => {
  const theme = useColorScheme();

  const [darkModeSettings, setDarkModeSettings] = useState({
    darkMode: theme === "dark",
    systemMode: false,
  });

  const setDarkMode = (value: boolean) => {
    setDarkModeSettings({
      darkMode: value,
      systemMode: false,
    });
  };

  const setSystemMode = (value: boolean) => {
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
