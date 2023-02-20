import React from "react";

const NewsArticle = ({ post }) => {
  return (
    <div className="news">
      <img src={post.urlToImage} alt="news" className="news__image" />
      <h1 className="news__title">{post.title}</h1>
      <p className="news__desc">{post.description}</p>
      <span className="news__author">{post.author}</span>
      <br />
      <div className="news__details">
        <span className="news__published">{post.publishedAt}</span>
        <span className="news__source news__info">{post.source.name}</span>
        <br />
        <a
          href={post.url}
          className="news__url"
          target="_blank"
          rel="noreferrer"
        >
          Read More...
        </a>
      </div>
    </div>
  );
};

export default NewsArticle;
