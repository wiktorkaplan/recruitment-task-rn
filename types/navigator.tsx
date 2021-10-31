export type AlbumsStackProps = {
  Albums: undefined;
};

export type NewsStackProps = {
  NewsList: undefined;
  NewsDetails: { newsId: number };
};

export type TabContainerProps = {
  label?: string;
  focused?: boolean;
};
