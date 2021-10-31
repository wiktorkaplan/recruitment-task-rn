import React from "react";
import { Container, Title } from "./NewsDetails.styles";

const NewsDetails = ({ route }) => {
  const { post } = route && route.params;
  console.log(post);
  return (
    <Container>
      <Title>NewsDetails</Title>
    </Container>
  );
};
export default NewsDetails;
