import React from "react";
import { Container, ScrollWrapper, Wrapper } from "./MainView.styles";

type Props = {
  scrollable?: boolean;
  additionalStyles?: object;
};

const MainView: React.FC<Props> = ({
  children,
  scrollable = false,
  additionalStyles,
}) => (
  <Container>
    {scrollable && (
      <ScrollWrapper
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        style={{ ...additionalStyles }}
      >
        {children}
      </ScrollWrapper>
    )}
    {!scrollable && (
      <Wrapper style={{ ...additionalStyles }}>{children}</Wrapper>
    )}
  </Container>
);

export default MainView;
