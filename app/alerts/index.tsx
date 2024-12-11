import { View, Text, Alert } from "react-native";
import ThemedView from "../../presentation/shared/ThemedView";
import ThemedButton from "@/presentation/shared/ThemedButton";

const AlertsScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive",
      },
    ]);

  return (
    <ThemedView margin>
      <ThemedButton className="mb-4" onPress={createTwoButtonAlert}>
        2 Button Alert
      </ThemedButton>
      <ThemedButton onPress={createThreeButtonAlert}>
        3 Button Alert
      </ThemedButton>
    </ThemedView>
  );
};
export default AlertsScreen;
