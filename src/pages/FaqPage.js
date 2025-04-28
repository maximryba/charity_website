import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import faqImage from '../assets/img/faq_rectangle.png';
import supportIcon from '../assets/img/support.png';
import chatIcon from '../assets/img/chat.png';
import addressIcon from '../assets/img/address.png';
import sponsorOne from '../assets/img/sponsor_one.png';
import sponsorTwo from '../assets/img/sponsor_two.png';
import sponsorThree from '../assets/img/sponsor_three.png';
import sponsorFour from '../assets/img/sponsor_four.png';

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Измените жизнь ребёнка",
      answer: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
    },
    {
      question: "Давайте делать правильные вещи сейчас",
      answer: "Ответ на второй вопрос. Здесь может быть развернутая информация."
    },
    {
      question: "Могу я пожертвовать анонимно?",
      answer: "Да, вы можете сделать анонимное пожертвование. Ваши данные не будут отображаться публично."
    },
    {
      question: "Протяни свою руку с нами к лучшей жизни",
      answer: "Присоединяйтесь к нашим программам волонтерства или делайте пожертвования."
    },
    {
      question: "Как я могу отменить повторное пожертвование?",
      answer: "Вы можете отменить повторное пожертвование в личном кабинете или связавшись с нашей поддержкой."
    }
  ];

  const helpItems = [
    {
      icon: supportIcon,
      title: "Тех поддержка",
      text: "С вами свяжется наш оператор, и ответит на все ваши вопросы"
    },
    {
      icon: chatIcon,
      title: "Все с нами",
      text: "Нас хорошо знают в отрасли благотворительности"
    },
    {
      icon: addressIcon,
      title: "Адрес",
      text: "2464 Роял Лн. Меса, Москва 45463"
    }
  ];

  const sponsors = [sponsorOne, sponsorTwo, sponsorThree, sponsorFour];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="container">
        <Header />
      </div>

      <main>
        <h1>Часто задаваемые вопросы</h1>
        <p className="main__text">Главная/FAQ</p>
      </main>

      <div className="faq__container">
        <h3 id="faq">Есть какие-то вопросы?</h3>
        <h2 id="faq">Часто задаваемые вопросы</h2>
        <div className="faq__line">
          <div className="left">
            <img loading="lazy" src={faqImage} alt="FAQ" className="faq__img" />
          </div>
          <div className="right_faq">
            <div className="faq__blocks">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className={`faq__block ${activeIndex === index ? 'opened' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq__left">
                    <p className="faq__title">{faq.question}</p>
                    {activeIndex === index && <p className="faq__ans">{faq.answer}</p>}
                  </div>
                  <div className="faq__right">
                    <p className="faq__sign">{activeIndex === index ? '-' : '+'}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <h2 id="help">Ещё нужна помощь</h2>
      <p className="help__text__head">
        Нам нравится адаптировать наши стратегии, чтобы предложить
        каждому клиенту лучшие решения, которые есть
        в авангарде отрасли.
      </p>

      <div className="help__line">
        {helpItems.map((item, index) => (
          <div key={index} className="help__block">
            <img loading="lazy" src={item.icon} alt={item.title} className="help__img" />
            <p className="help__title">{item.title}</p>
            <p className="help__text">{item.text}</p>
          </div>
        ))}
      </div>

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

export default FaqPage;