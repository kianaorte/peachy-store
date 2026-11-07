jest.mock("lucide-react-native", () => {
  const React = require("react");
  const { View } = require("react-native");

  return {
    __esModule: true,
    ChevronLeft: (props: any) => React.createElement(View, props),
    Heart: (props: any) => React.createElement(View, props),
    ShoppingCart: (props: any) => React.createElement(View, props),
  };
});
