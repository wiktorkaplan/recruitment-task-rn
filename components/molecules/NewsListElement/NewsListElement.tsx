import React from "react";
import {
  Wrapper,
  Title,
  Description,
  ButtonArrow,
} from "./NewsListElement.styles";
import { newsListElementProps } from "../../../types/news";
import { ContentBox } from "../../templates";
import { ArrowRight } from "../../../assets/vectors";

const NewsListElement: React.FC<newsListElementProps> = ({
  title,
  description,
  onPress,
}) => (
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
