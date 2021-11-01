import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NewsStackProps } from "./navigator";

export type newsListProps = NativeStackScreenProps<NewsStackProps, "NewsList">;

export type newsItemProps = {
  userId: number;
  title: string;
  body: string;
  onPress: () => void;
  id: number;
};

export type newsDetailsProps = NativeStackScreenProps<
  NewsStackProps,
  "NewsDetails"
>;

export type commentItemProps = {
  userId: number;
  title: string;
  body: string;
  id: number;
  email: string;
};

export type addCommentProps = {
  postId: number;
  comment: {
    userId: number;
    name: string;
    email: string;
    postId: number;
    body: string;
  };
};

export type singleNewsProps = {
  title: string;
  description: string;
};

export type newsListElementProps = {
  title: string;
  description: string;
  onPress?: () => void;
};

export type additionalStyleProps = {
  additionalStyles?: object;
};

export type mainViewProps = {
  scrollable?: boolean;
  additionalStyles?: object;
};
