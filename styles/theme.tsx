import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    text: {
      title: string;
      gray: string;
    };
    fontFamily: {
      bold: string;
      medium: string;
      regular: string;
    };
    navigator: {
      label: string;
      labelFocused: string;
    };
    font14line21: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
    };
  }
}

export const primaryTheme: DefaultTheme = {
  text: { title: "#001524", gray: "#A0ABB2" },
  fontFamily: {
    bold: "Roboto-Bold",
    medium: "Roboto-Medium",
    regular: "Roboto-Regular",
  },
  navigator: {
    label: "#586976",
    labelFocused: "#466bc9",
  },
  font14line21: {
    fontSize: "14px",
    lineHeight: "21px",
    letterSpacing: "0.2px",
  },
};
