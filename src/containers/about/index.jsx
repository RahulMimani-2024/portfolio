import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent/index";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { FaDev } from "react-icons/fa";
import { DiNodejs, DiReact, DiMongodb } from "react-icons/di";
const personalDetails = [
  {
    label: "Name",
    value: "Rahul Mimani",
  },
  {
    label: "Age",
    value: "21",
  },
  {
    label: "Country",
    value: "India",
  },
];
const description = `I possess substantial expertise and knowledge in software development, coupled with adept problem-solving skills. I have a keen ability to grasp concepts swiftly and tackle challenges expeditiously, all while ensuring comprehensive test case coverage. I am also known for my diligent work ethic, I gained invaluable insights. I now believe that my experiences have equipped me to adeptly navigate intricate situations. Throughout my journey, I have undertaken a multitude of projects, each involving diverse technological stacks. My engineering-oriented mindset is poised to be an asset to your organization, aiding in resolving complex scenarios. I am confident that my capabilities align well with your needs, and I am eager to leverage my skills to contribute meaningfully to your team.`;
const Index = () => {
  return (
    <React.Fragment>
      <section id="about" className="about">
        <PageHeaderContent
          headerText="about me"
          icon={<BsInfoCircleFill size={40} />}
        ></PageHeaderContent>
        <div className="about__content">
          <div className="about__content__personalWrapper">
            <Animate
              play
              duration={1}
              delay={0.5}
              start={{
                transform: "translateX(-900px)",
              }}
              end={{
                transform: "translatex(0px)",
              }}
            >
              <h3>Software Developer</h3>
              <p>{description}</p>
            </Animate>
            <Animate
              play
              duration={1}
              delay={0.5}
              start={{
                transform: "translateX(500px)",
              }}
              end={{
                transform: "translatex(0px)",
              }}
            >
              <h3 className="personalInfoHeader">Personal Details</h3>
              <ul>
                {personalDetails.map((item, i) => {
                  return (
                    <li key={i}>
                      <span className="title">{item.label} : </span>
                      <span className="value">{item.value}</span>
                    </li>
                  );
                })}
              </ul>
            </Animate>
          </div>
          <div className="about__content__servicesWrapper">
          <Animate
              play
              duration={1}
              delay={0.5}
              start={{
                transform: "translateX(900px)",
              }}
              end={{
                transform: "translatex(0px)",
              }}
            >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var(--green-theme-main-color)" />
              </div>
              <div>
                <DiReact size={60} color="var(--green-theme-main-color)" />
              </div>
              <div>
                <DiMongodb size={60} color="var(--green-theme-main-color)" />
              </div>
              <div>
                <DiNodejs size={60} color="var(--green-theme-main-color)" />
              </div>
            </div>
            </Animate>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Index;
