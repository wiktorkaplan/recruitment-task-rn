import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    background: { main: string; white: string; blue: string };
    text: {
      title: string;
      gray: string;
      darkGray: string;
      paragraph: string;
      white: string;
      error: string;
      success: string;
      info: string;
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
  background: {
    main: "#F4F6F9",
    white: "#fff",
    blue: "#466BC9",
  },
  text: {
    title: "#001524",
    gray: "#A0ABB2",
    darkGray: "#586976",
    paragraph: "#182F40",
    white: "#fff",
    error: "#ff3535",
    success: "#00b43c",
    info: "#3543ff",
  },
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
