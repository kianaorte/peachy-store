import { render, screen, userEvent } from "@testing-library/react-native";
import Button from "./Button";

describe("Button", () => {
  it("renders the label", async () => {
    await render(<Button label="Add to Bag" onPress={() => {}} />);

    expect(
      screen.getByRole("button", { name: "Add to Bag" }),
    ).toBeOnTheScreen();
  });

  it("calls onPress when pressed", async () => {
    const onPress = jest.fn();
    const user = userEvent.setup();

    await render(<Button label="Add to Bag" onPress={onPress} />);

    await user.press(screen.getByRole("button", { name: "Add to Bag" }));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it("does not call onPress when disabled", async () => {
    const onPress = jest.fn();
    const user = userEvent.setup();

    await render(<Button label="Add to Bag" onPress={onPress} disabled />);

    await user.press(screen.getByRole("button", { name: "Add to Bag" }));

    expect(onPress).not.toHaveBeenCalled();
  });
});
