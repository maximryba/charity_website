import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import sponsorOne from '../assets/img/sponsor_one.png';
import sponsorTwo from '../assets/img/sponsor_two.png';
import sponsorThree from '../assets/img/sponsor_three.png';
import sponsorFour from '../assets/img/sponsor_four.png';
import FeedbackForm from '../components/FeedbackForm';

const ContactPage = () => {
  const sponsors = [sponsorOne, sponsorTwo, sponsorThree, sponsorFour];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы
    alert('Форма отправлена!');
  };

  return (
    <>
      <div className="container">
        <Header />
      </div>

      <main>
        <h1>Контакты</h1>
        <p className="main__text">Главная/Контакты</p>
      </main>

     <FeedbackForm/>

      <div className="sponsors">
        {sponsors.map((sponsor, index) => (
          <img 
            key={index}
            loading="lazy" 
            src={sponsor} 
            alt="Sponsor" 
            className="sponsor__img" 
          />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default ContactPage; 