import { useQuery } from "react-query";
import axios from "axios";

const fetch = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

const usePosts = () => useQuery("posts", fetch);

export default usePosts;
