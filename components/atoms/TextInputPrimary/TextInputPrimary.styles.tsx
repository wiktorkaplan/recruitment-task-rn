import styled from "styled-components/native";

export const Primary = styled.TextInput`
  background-color: ${({ theme }) => theme.background.white};
  border-radius: 8px;
  padding: 20px;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.font14line21.fontSize};
  letter-spacing: ${({ theme }) => theme.font14line21.letterSpacing};
  color: ${({ theme }) => theme.text.darkGray};
`;
