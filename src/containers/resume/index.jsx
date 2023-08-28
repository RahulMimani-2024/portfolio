import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent/index";
import { FcBusinessman } from "react-icons/fc";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { data } from "./urils";
import { MdWork } from "react-icons/md";
import "./styles.scss";
import "react-vertical-timeline-component/style.min.css";
const Index = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="my resume"
        icon={<FcBusinessman size={40} />}
      ></PageHeaderContent>
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--green-theme-main-color)"
          >
            {data.experience.map((item, i) => {
              return (
                <VerticalTimelineElement
                  key={i}
                  className="timeline__experience__vertical-timeline-element"
                  contentStyle={{
                    background: "none",
                    color: "var(--green-theme-sub-text-color)",
                    border: "1.5px solid var(--green-theme-main-color)",
                  }}
                  date={item.date}
                  icon={<MdWork></MdWork>}
                  iconStyle={{
                    background: "#181818",
                    color: "var(--green-theme-main-color)",
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3 >
                      {item.title}
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                      {item.subtitle}
                    </h4>
                  </div>
                  <p className="vertical-timeline-element-title-wrapper-description">{item.desciption}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--green-theme-main-color)"
          >
            {data.education.map((item, i) => {
              return (
                <VerticalTimelineElement
                  key={i}
                  className="timeline__education__vertical-timeline-element"
                  contentStyle={{
                    background: "none",
                    color: "var(--green-theme-sub-text-color)",
                    border: "1.5px solid var(--green-theme-main-color)",
                  }}
                  date={item.date}
                  icon={<MdWork></MdWork>}
                  iconStyle={{
                    background: "#181818",
                    color: "var(--green-theme-main-color)",
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3>
                      {item.title}
                    </h3>
                    <h4 >
                      {item.subtitle}
                    </h4>
                  </div>
                  <p className="vertical-timeline-element-title-wrapper-description">{item.desciption}</p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Index;
