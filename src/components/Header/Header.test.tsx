import { render } from "@testing-library/react-native";
import Header from "./Header";

describe("Header", () => {
  it("should display the store name", async () => {
    const { getByText } = await render(<Header />);
    expect(getByText("Peachy")).toBeTruthy();
  });
  it("should display the chevron button", async () => {
    const { getByRole } = await render(<Header />);
    expect(getByRole("button", { name: "Chevron" })).toBeOnTheScreen();
  });
  it("should display the shopping cart button", async () => {
    const { getByRole } = await render(<Header />);
    expect(getByRole("button", { name: "Shopping cart" })).toBeOnTheScreen();
  });
});
