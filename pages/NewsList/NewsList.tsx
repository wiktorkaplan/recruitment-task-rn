import React from "react";
import { ListRenderItem, FlatList, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { usePosts } from "../../hooks";
import { NewsStackProps } from "../../types/navigator";
import { MainView } from "../../components/templates";
import { NewsListElement } from "../../components/molecules";

type Props = NativeStackScreenProps<NewsStackProps, "NewsList">;

type renderItemProps = {
  userId: number;
  title: string;
  body: string;
  onPress: () => void;
  id: number;
};

const NewsList: React.FC<Props> = ({ navigation }) => {
  const { data, isLoading, isSuccess } = usePosts();
  const renderItem: ListRenderItem<renderItemProps> = ({ item }) => (
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
