import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent/index";
import { BsFillLightbulbFill } from "react-icons/bs";
import { skillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./styles.scss"
const Index = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText="my skills"
        icon={<BsFillLightbulbFill size={40} />}
      ></PageHeaderContent>
      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => {
          return (
            <div key={i} className="skills__content-wrapper__inner-content">
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: "translateX(-200px)",
                }}
                end={{
                  transform: "translateX(0px)",
                }}
              >
                <h3 className="skills__content-wrapper__inner-content__category-text">
                  {item.label}
                </h3>
                <div className="skills__content-wrapper__inner-content__category-text__progessbar-container">
                  {item.data.map((skillItem, j) => {
                    return (
                      <AnimateKeyframes
                        play
                        duration={1}
                        keyframes={["opacity : 1", "opacity : 0"]}
                        iterationCount="1"
                      >
                        <div className="progessbar-wrapper" key={j}>
                          <p>{skillItem.skill}</p>
                          <Line
                          percent={skillItem.percentage}
                          strokeWidth="2"
                          strokeColor="var(--green-theme-main-color)"
                          trailWidth="2"
                          strokeLinecap="square"
                          >
                          </Line>
                        </div>
                      </AnimateKeyframes>
                    );
                  })}
                </div>
              </Animate>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Index;
