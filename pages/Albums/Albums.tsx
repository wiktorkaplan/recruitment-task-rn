import React from "react";
import { ListRenderItem, FlatList, Text } from "react-native";
import { useQuery } from "react-query";
import { fetchAlbums } from "../../api";
import { albumListElementProps } from "../../types/albums";
import { MainView } from "../../components/templates";
import { AlbumListElement } from "../../components/molecules";

const Albums: React.FC<albumListElementProps> = () => {
  const { data, isLoading, isSuccess } = useQuery("albums", fetchAlbums);

  const renderItem: ListRenderItem<albumListElementProps> = ({ item }) => (
    <AlbumListElement title={item.title} id={item.id} />
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
          numColumns={2}
          contentContainerStyle={{
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
          // removeClippedSubviews
          initialNumToRender={8}
          maxToRenderPerBatch={1}
          updateCellsBatchingPeriod={200}
          windowSize={7}
        />
      )}
    </MainView>
  );
};
export default Albums;
