import axios from "axios";
import { API_DOMAIN } from "react-native-dotenv";
import { addCommentProps } from "../types/news";

export const fetchPosts = async () => {
  const { data } = await axios.get(`${API_DOMAIN}/posts`);
  return data;
};

export const fetchComments = async (postId: number) => {
  const { data } = await axios.get(`${API_DOMAIN}/posts/${postId}/comments`);
  return data;
};

export const addComment = async ({ postId, comment }: addCommentProps) => {
  const response = await axios.post(
    `${API_DOMAIN}/posts/${postId}/comments`,
    JSON.stringify(comment)
  );
  return response;
};
