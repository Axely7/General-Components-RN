import { View, Text, TextProps } from "react-native";
import React from "react";

interface Props extends TextProps {
  className?: string;
  type?: "normal" | "h1" | "h2" | "semibold" | "link";
}

const ThemedText = ({ className, type, ...rest }: Props) => {
  // className="mt-10 text-3xl text-light-text dark:text-dark-primary"

  return (
    <Text
      className={[
        "text-light-text dark:text-dark-primary",
        type === "normal" && "font-normal",
        type === "h1" && "text-3xl",
        type === "h2" && "text-xl",
        type === "semibold" && "font-bold",
        type === "link" && "font-normal underline",
        className,
      ].join(" ")}
      {...rest}
    />
  );
};

export default ThemedText;
