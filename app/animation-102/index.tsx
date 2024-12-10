import { View, Text, Animated, PanResponder } from "react-native";
import ThemedView from "@/presentation/shared/ThemedView";
import { useRef } from "react";

const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      {
        useNativeDriver: false,
      }
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: {
          x: 0,
          y: 0,
        },
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <ThemedView margin className="justify-center items-center flex-1">
      <Animated.View
        {...panResponder.panHandlers}
        className="bg-light-primary dark:bg-dark-secondary rounded-xl"
        style={[
          pan.getLayout(),
          {
            width: 150,
            height: 150,
          },
        ]}
      />
    </ThemedView>
  );
};
export default Animation102Screen;
