import React from "react";
import { Text } from "react-native";
import { useQuery } from "react-query";
import { Title, Container, Photo } from "./AlbumListElement.styles";
import { fetchPhotos } from "../../../api";
import { albumListElementProps } from "../../../types/albums";

const AlbumListElement: React.FC<albumListElementProps> = ({ title, id }) => {
  const {
    data: photos,
    isSuccess,
    isLoading,
  } = useQuery(["albums", id], () => fetchPhotos(id));

  return (
    <Container
      style={{
        shadowColor: "#F0F2F5",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
      }}
    >
      {isLoading && <Text>Loading...</Text>}
      {isSuccess && (
        <Photo
          source={{
            uri: photos[0].thumbnailUrl,
          }}
        />
      )}
      <Title numberOfLines={2}>{title}</Title>
    </Container>
  );
};

export default AlbumListElement;
