import React from "react";

const NewsList = ({ news }) => {
  return (
    <div className="news-list">
      {news.map((article, index) => (
        <div key={index} className="news-card">
          <h3>{article.title}</h3>
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} />
          )}
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Читать далее →
          </a>
        </div>
      ))}
    </div>
  );
};

export default NewsList;