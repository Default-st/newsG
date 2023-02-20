import React, { useContext } from "react";
import NewsArticle from "./NewsArticle";
import { NewsContext } from "./NewsContext";
const News = () => {
  const posts = useContext(NewsContext);
  return (
    <div>
      <h1 className="head__text">.newsG</h1>
      <div className="all__news">
        {posts &&
          posts.map((post, index) => {
            return <NewsArticle key={index} post={post} />;
          })}
      </div>
    </div>
  );
};

export default News;
