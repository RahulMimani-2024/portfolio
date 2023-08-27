import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent/index";
import { ImHappy } from "react-icons/im";
import "./styles.scss";
import Image1 from "../../images/pharm-store.png";
import Image2 from "../../images/weather-app.png";
import Image3 from "../../images/chat-app.png";
import Image4 from "../../images/backend-e-commerce.png";
import Image5 from "../../images/expenses.png";
import Image6 from "../../images/api-pharm-store.png";
import Image7 from "../../images/gm-chat.png";

import { useState } from "react";

const portfolioData = [
  {
    category: 1,
    name: "pharm-store",
    link: "https://pharm-store.vercel.app",
    image: Image1,
  },
  {
    category: 1,
    name: "weather-app",
    link: "https://weather-app-tav8.onrender.com/",
    image: Image2,
  },
  {
    category: 1,
    name: "chat-app",
    link: "https://mimani-chat-1.onrender.com/",
    image: Image3
  },
  {
    category: 1,
    name: "expenses",
    link: "https://expenses-frontend.netlify.app/",
    image: Image5
  },
  {
    category: 2,
    name: "E-Commerece",
    link: "https://github.com/RahulMimani-2024/api-e-commerce",
    image: Image4,
  },
  {
    category: 2,
    name: "api-pharm-store",
    link: "https://github.com/RahulMimani-2024/react-pharm-store",
    image: Image6,
  },
  {
    category : 1,
    name : "whatsapp-clone",
    link : "https://whatsapp-clone-lime.vercel.app/",
    image : Image7
  }
];

const filterData = [
  {
    categoryId: 3,
    label: "all",
  },
  {
    categoryId: 1,
    label: "frontend",
  },
  {
    categoryId: 2,
    label: "backend",
  },
];

const Index = () => {
  const [filterId, setFilterId] = useState(3);
  const [hoverValue , setHoverValue] = useState(null)
  const handleFIlter = (id) => {
    setFilterId(id);
  };
  const handleHover = (index) => {
    setHoverValue(index);
  }
  const handleClick = (link) => {
    window.open(link, '_blank');
  }
  const filteredData =
    filterId === 3
      ? portfolioData
      : portfolioData.filter((item) => item.category === filterId);
  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="my portfolio"
        icon={<ImHappy size={40} />}
      ></PageHeaderContent>
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => {
            return (
              <li
                className={item.categoryId === filterId ? "active" : ""}
                key={item.categoryId}
                onClick={() => handleFIlter(item.categoryId)}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
        <div className="portfolio__content__cards">
          {filteredData.map((item, index) => {
            return (
              <div className="portfolio__content__cards__item" key={index} onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleHover(null)}>
                <div className="portfolio__content__cards__item__img-wrapper">
                  <a href={item.link}>
                    <img src={item.image} alt={"project"}></img>
                  </a>
                </div>
                <div className="overlay">
                  {
                    index === hoverValue && 
                    <div>
                      <p>{item.name}</p>
                      <button onClick={() => handleClick(item.link)}>Visit</button>
                    </div>
                  }
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Index;
