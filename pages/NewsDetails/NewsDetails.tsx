import React from "react";
import { Text } from "react-native";
import { useQuery } from "react-query";
import { Title, Container } from "./NewsDetails.styles";
import { fetchComments } from "../../api";
import { newsDetailsProps, commentItemProps } from "../../types/news";
import {
  SingleNews,
  SingleComment,
  AddNewComment,
} from "../../components/molecules";
import { MainView } from "../../components/templates";

const NewsDetails: React.FC<newsDetailsProps> = ({ route }) => {
  const { post } = route && route.params;

  const {
    data: comments,
    isSuccess,
    isLoading,
  } = useQuery(["posts", post.id], () => fetchComments(post.id));

  return (
    <MainView scrollable>
      <Container>
        <SingleNews title={post.title} description={post.body} />
        <Title>Comments</Title>
        <AddNewComment id={post.id} />
        {isLoading && <Text>Loading...</Text>}
        {isSuccess &&
          comments.map((item: commentItemProps) => (
            <SingleComment
              key={item.id}
              title={item.email}
              description={item.body}
            />
          ))}
      </Container>
    </MainView>
  );
};
export default NewsDetails;
