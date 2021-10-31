import React from "react";
import {
  Wrapper,
  Title,
  Description,
  ButtonArrow,
} from "./NewsListElement.styles";
import { ContentBox } from "../../templates";
import { ArrowRight } from "../../../assets/vectors";

type Props = {
  title: string;
  description: string;
  onPress?: any;
};

const NewsListElement: React.FC<Props> = ({ title, description, onPress }) => (
  <ContentBox
    additionalStyles={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: 5,
    }}
  >
    <Wrapper>
      <Title numberOfLines={2}>{title}</Title>
      <Description numberOfLines={3}>{description}</Description>
    </Wrapper>
    <ButtonArrow onPress={onPress}>
      <ArrowRight />
    </ButtonArrow>
  </ContentBox>
);

export default NewsListElement;
