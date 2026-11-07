import { colors, iconSize, spacing } from "@/theme/theme";
import { ChevronLeft, ShoppingCart } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "../Button/IconButton";

const Header = () => {
  return (
    <View style={styles.header}>
      <IconButton label={"Chevron"}>
        <ChevronLeft size={iconSize} />
      </IconButton>
      <Text style={styles.title}>Peachy</Text>
      <IconButton label={"Shopping cart"}>
        <ShoppingCart size={iconSize} />
      </IconButton>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: spacing.md,
    paddingTop: spacing.xxl,
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: colors.primary,
    paddingLeft: spacing.xl,
  },
});
