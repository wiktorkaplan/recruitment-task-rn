import styled from "styled-components/native";

export const ErrorLabel = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.font14line21.fontSize};
  line-height: ${({ theme }) => theme.font14line21.lineHeight};
  letter-spacing: ${({ theme }) => theme.font14line21.letterSpacing};
  color: ${({ theme }) => theme.text.error};
`;
export const InfoLabel = styled(ErrorLabel)`
  color: ${({ theme }) => theme.text.info};
`;
export const SuccessLabel = styled(ErrorLabel)`
  color: ${({ theme }) => theme.text.success};
`;
