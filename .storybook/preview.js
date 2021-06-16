import { addDecorator } from "@storybook/react";
import withGlobalStyles from "./whthGlobalStyles";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(withGlobalStyles);
