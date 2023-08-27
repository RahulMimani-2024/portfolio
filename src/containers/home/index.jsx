import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
const Index = () => {
  const navigate = useNavigate();
  const navigateToContactPage = () => {
    navigate("/contact");
  };
  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello , I'm Rahul Mimani
          <br></br>
          Software Development Engineer
        </h1>
      </div>
      <Animate 
      play
      duration={1}
      delay={0.5}
      start={{
        transform : "translateY(150px)"
      }}
      end={{
        transform : "translatex(0px)"
      }}
      >
        <div className="home__contact-me">
          <button onClick={navigateToContactPage}>Hire Me</button>
        </div>
      </Animate>
    </section>
  );
};

export default Index;
