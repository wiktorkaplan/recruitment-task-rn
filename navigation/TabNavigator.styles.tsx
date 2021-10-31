import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-bottom-width: 2px;
  border-bottom-color: transparent;
`;
export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.font14line21.fontSize};
  line-height: ${({ theme }) => theme.font14line21.lineHeight};
  letter-spacing: ${({ theme }) => theme.font14line21.letterSpacing};
  color: ${({ theme }) => theme.navigator.label};
`;

export const ContainerFocused = styled(Container)`
  border-bottom-color: ${({ theme }) => theme.navigator.labelFocused};
`;
export const LabelFocused = styled(Label)`
  color: ${({ theme }) => theme.navigator.labelFocused}; ;
`;
