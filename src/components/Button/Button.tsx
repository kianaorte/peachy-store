import { colors, typography } from "@/theme/theme";
import { buttonStyles } from "./Button.styles";
import type { PressableProps } from "react-native";
import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps extends Omit<PressableProps, "children"> {
  label?: string;
  variant?: "primary" | "secondary";
  loading?: boolean;
}

const Button = ({
  label,
  variant = "primary",
  loading = false,
  disabled = false,
  style,
  ...props
}: ButtonProps) => {
  const isDisabled = disabled || loading;
  const isPrimary = variant === "primary";

  return (
    <Pressable
      {...props}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      style={(state) => [
        buttonStyles.button,
        isPrimary ? styles.primary : styles.secondary,
        state.pressed && !isDisabled && styles.pressed,
        isDisabled && styles.disabled,
        typeof style === "function" ? style(state) : style,
      ]}
    >
      {loading && (
        <ActivityIndicator
          color={isPrimary ? colors.text : colors.primaryDark}
        />
      )}
      <Text
        style={[
          styles.label,
          isPrimary ? styles.primaryText : styles.secondaryText,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.surfaceAlt,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.5,
  },
  label: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.semibold,
  },
  primaryText: {
    color: colors.text,
  },
  secondaryText: {
    color: colors.text,
  },
});
