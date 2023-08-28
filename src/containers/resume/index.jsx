import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent/index";
import { BsDownload } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { data } from "./urils";
import { MdWork } from "react-icons/md";
import "./styles.scss";
import pdf from "../../utils/rahul_mimani_sde.pdf"
import "react-vertical-timeline-component/style.min.css";
const Index = () => {
  const handleDownload = () => {
    // Replace 'your-file-url' with the actual URL of the file you want to download.
    console.log("insde");
    const fileUrl = pdf;
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'resume.pdf'); // Replace 'filename.ext' with the desired file name and extension.
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="my resume"
        icon={<BsDownload size={40} style={{"cursor" : "pointer"}} onClick={handleDownload}/>}
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
