import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useThemeColor } from "../hooks/useThemeColor";
import { Stack } from "expo-router";
import { allRoutes } from "@/constants/Routes";
import { ThemeChangerProvider } from "@/presentation/context/ThemeChangerContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const backgrounColor = useThemeColor({}, "background");

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView
      style={{ backgroundColor: backgrounColor, flex: 1 }}
    >
      <ThemeChangerProvider>
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgrounColor,
            },
            headerStyle: {
              backgroundColor: backgrounColor,
            },
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              title: "",
            }}
          />
          {allRoutes.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={{
                title: route.title,
                headerShown: !route.title.includes("Slides"),
              }}
            />
          ))}
        </Stack>
      </ThemeChangerProvider>
    </GestureHandlerRootView>
  );
}
