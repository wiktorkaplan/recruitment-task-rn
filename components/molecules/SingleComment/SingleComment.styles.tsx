import styled from "styled-components/native";

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.font14line21.fontSize};
  line-height: ${({ theme }) => theme.font14line21.lineHeight};
  letter-spacing: ${({ theme }) => theme.font14line21.letterSpacing};
  color: ${({ theme }) => theme.text.title};
  margin: 0 0 5px 0;
`;
export const Description = styled(Title)`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  color: ${({ theme }) => theme.text.paragraph};
`;
