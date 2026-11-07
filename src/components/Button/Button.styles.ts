import { radius, spacing } from "@/theme/theme";
import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
  button: {
    minHeight: 48,
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: radius.lg,
    alignItems: "center",
    justifyContent: "center",
  },
});
