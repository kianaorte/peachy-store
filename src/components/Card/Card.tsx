import { colors, spacing } from "@/theme/theme";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface CardProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Card = ({ children, style, ...props }: CardProps) => {
  return (
    <View {...props} style={[styles.container, style]}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    backgroundColor: colors.surface,
  },
});
