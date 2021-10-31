import React from "react";
import { Container } from "./ContentBox.styles";

type Props = {
  additionalStyles?: object;
};

const ContentBox: React.FC<Props> = ({ children, additionalStyles }) => (
  <Container
    style={{
      shadowColor: "#F0F2F5",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,

      elevation: 8,
      ...additionalStyles,
    }}
  >
    {children}
  </Container>
);

export default ContentBox;
