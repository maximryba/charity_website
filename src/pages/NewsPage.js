import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsList from "../components/NewsList";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryFilter from "../components/CategoryFilter";

function NewsPage() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("general");

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&q=${searchQuery}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
      );
      setNews(response.data.articles);
    } catch (err) {
      setError("Не удалось загрузить новости. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category, searchQuery]);

  return (
    <>
    <div className="container">
        <Header />
      </div>
    <div className="news-page">
      <h1>Новости</h1>
      <SearchBar onSearch={setSearchQuery} />
      <CategoryFilter onSelectCategory={setCategory} />
      {loading ? (
        <p>Загрузка...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <NewsList news={news} />
      )}
    </div>
    <Footer />
    </>
  );
}

export default NewsPage;