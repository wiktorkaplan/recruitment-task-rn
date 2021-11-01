import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 47%;
  background-color: ${({ theme }) => theme.background.white};
  padding: 0px;
  border-radius: 8px;
  margin: 10px 1.5%;
`;
export const Photo = styled.Image`
  width: 100%;
  height: 120px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: ${({ theme }) => theme.font14line21.fontSize};
  line-height: ${({ theme }) => theme.font14line21.lineHeight};
  letter-spacing: ${({ theme }) => theme.font14line21.letterSpacing};
  color: ${({ theme }) => theme.text.title};
  padding: 10px;
  text-align: center;
`;
