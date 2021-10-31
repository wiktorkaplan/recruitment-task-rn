import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 80%;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.font14line21.fontSize};
  line-height: ${({ theme }) => theme.font14line21.lineHeight};
  letter-spacing: ${({ theme }) => theme.font14line21.letterSpacing};
  color: ${({ theme }) => theme.text.title};
`;
export const Description = styled(Title)`
  color: ${({ theme }) => theme.text.gray};
`;
export const ButtonArrow = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: rgba(62, 89, 160, 0.1);
  border-radius: 16px;
  width: 34px;
  height: 34px;
`;
