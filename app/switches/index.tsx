import { View, Text, Switch } from "react-native";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView margin className="mt-2">
      {/* <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={state.isActive ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor={"#3e3e3e"}
        onValueChange={(value) => setState({ ...state, isActive: value })}
        value={state.isActive}
      /> */}
    </ThemedView>
  );
};
export default Switches;
