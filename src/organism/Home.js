import React from "react";
import "../style/sass/_home.scss";
import { articles } from "../utility";

const Home = () => {
  return (
    <div className="articleWrapper">
      <h1 className="articleH">Several articles on health.</h1>
      {articles.length ? (
        articles.map((article) => {
          return (
            <ul key={article.title} className="articleList">
              <h2 className="articleHSmaller">{article.title} </h2>
              <p className="articleText">{article.text}</p>
            </ul>
          );
        })
      ) : (
        <h1>I am sory, but we have nothing to show you</h1>
      )}
    </div>
  );
};

export default Home;
