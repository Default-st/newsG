import React, { useState, useEffect } from "react";
import { NewsContext } from "./NewsContext";
import axios from "axios";

function Store({ children }) {
  const [posts, setPosts] = useState();
  useEffect(() => {
    const getPosts = async () => {
      const data = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=4993c75101b545398d250a5329311ed2"
      );
      //console.log(data.data.articles);
      setPosts(data.data.articles);
    };
    getPosts();
  }, []);
  return <NewsContext.Provider value={posts}>{children}</NewsContext.Provider>;
}
export default Store;
