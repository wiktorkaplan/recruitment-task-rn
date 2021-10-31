import React from "react";
import { Button } from "react-native";
import { Container, Title } from "./NewsList.styles";

const NewsList = ({ navigation }: any) => (
  <Container>
    <Title>NewsList</Title>
    <Button title="adas" onPress={() => navigation.push("NewsDetails")} />
  </Container>
);
export default NewsList;
