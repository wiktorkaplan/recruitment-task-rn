import React from "react";
import { ListRenderItem, FlatList, Text, LogBox } from "react-native";
import { useQuery } from "react-query";
import { fetchPosts } from "../../api";
import { newsListProps, newsItemProps } from "../../types/news";
import { MainView } from "../../components/templates";
import { NewsListElement } from "../../components/molecules";

LogBox.ignoreLogs(["Setting a timer"]);

const NewsList: React.FC<newsListProps> = ({ navigation }) => {
  const { data, isLoading, isSuccess } = useQuery("posts", fetchPosts);

  const renderItem: ListRenderItem<newsItemProps> = ({ item }) => (
    <NewsListElement
      title={item.title}
      description={item.body}
      onPress={() => navigation.push("NewsDetails", { post: item })}
    />
  );

  return (
    <MainView>
      {isLoading && <Text>Loading...</Text>}
      {isSuccess && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
        />
      )}
    </MainView>
  );
};
export default NewsList;
