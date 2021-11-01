import React from "react";
import { Title, Description } from "./SingleNews.styles";
import { singleNewsProps } from "../../../types/news";
import { ContentBox } from "../../templates";

const SingleNews: React.FC<singleNewsProps> = ({ title, description }) => (
  <ContentBox>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </ContentBox>
);

export default SingleNews;
