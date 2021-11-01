import React from "react";
import { Title, Description } from "./SingleComment.styles";
import { ContentBox } from "../../templates";
import { singleNewsProps } from "../../../types/news";

const SingleComment: React.FC<singleNewsProps> = ({ title, description }) => (
  <ContentBox additionalStyles={{ marginVertical: 5 }}>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </ContentBox>
);

export default SingleComment;
