import styled from "styled-components/native";

export const Container = styled.View`
  margin: 20px 15px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.font14line21.fontSize};
  line-height: ${({ theme }) => theme.font14line21.lineHeight};
  letter-spacing: ${({ theme }) => theme.font14line21.letterSpacing};
  color: ${({ theme }) => theme.text.darkGray};
  padding: 20px 0 10px 0;
`;
