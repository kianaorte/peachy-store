import React from "react";
import { Pressable } from "react-native";
import { buttonStyles } from "./Button.styles";

const IconButton = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => {
  return (
    <Pressable
      style={buttonStyles.button}
      accessibilityRole="button"
      accessibilityLabel={label}
    >
      {children}
    </Pressable>
  );
};

export default IconButton;
