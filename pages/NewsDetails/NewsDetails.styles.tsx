import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.text.title};
`;
