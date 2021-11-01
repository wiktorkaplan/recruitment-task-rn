import axios from "axios";
import { API_DOMAIN } from "react-native-dotenv";

export const fetchAlbums = async () => {
  const { data } = await axios.get(`${API_DOMAIN}/albums`);
  return data;
};

export const fetchPhotos = async (albumId: number) => {
  const { data } = await axios.get(`${API_DOMAIN}/albums/${albumId}/photos`);
  return data;
};
