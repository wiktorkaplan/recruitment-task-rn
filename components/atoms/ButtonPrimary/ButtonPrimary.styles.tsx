import styled from "styled-components/native";

export const Primary = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background.blue};
  padding: 15px 0;
  border-radius: 8px;
`;
export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.font14line21.fontSize};
  line-height: ${({ theme }) => theme.font14line21.lineHeight};
  letter-spacing: ${({ theme }) => theme.font14line21.letterSpacing};
  color: ${({ theme }) => theme.text.white};
`;
