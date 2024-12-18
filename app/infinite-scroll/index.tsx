import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { View, Text, FlatList } from "react-native";

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  return (
    <ThemedView>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({ item }) => <ThemedText>{item}</ThemedText>}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;
