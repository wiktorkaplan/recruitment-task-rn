import { newsItemProps } from "./news";

export type AlbumsStackProps = {
  Albums: undefined;
};

export type NewsStackProps = {
  NewsList: undefined;
  NewsDetails: { post: newsItemProps };
};

export type TabContainerProps = {
  label?: string;
  focused?: boolean;
};
