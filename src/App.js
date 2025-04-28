import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CausesPage from './pages/CausesPage';
import NewsPage from './pages/NewsPage';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import './styles/header.css';
import './styles/style.css';
import './styles/contact_us.css';
import './styles/causes.css';
import './styles/faq.css';
import './styles/footer.css';
import './styles/about_us.css';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage/>}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/causes" element={<CausesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </Router>
  </ThemeProvider>
  );
}

export default App;