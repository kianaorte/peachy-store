import { render, screen } from "@testing-library/react-native";
import { Text } from "react-native";

import { spacing } from "@/theme/theme";
import Card from "./Card";

describe("Card", () => {
  it("renders its children", async () => {
    await render(
      <Card>
        <Text>Card content</Text>
      </Card>,
    );

    expect(screen.getByText("Card content")).toBeOnTheScreen();
  });
  it("accepts custom styles", async () => {
    await render(
      <Card style={{ marginTop: spacing.lg }}>
        <Text>Card content</Text>
      </Card>,
    );

    expect(screen.getByText("Card content").parent).toHaveStyle({
      marginTop: spacing.lg,
    });
  });
});
