import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: flex-end;
  height: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.medium};
  color: ${({ theme }) => theme.text.title};
  font-size: 20px;
`;
