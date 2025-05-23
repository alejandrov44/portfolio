"use client";

import React, { useEffect, useState } from "react";
import VerticalTimeline from "@/components/vertical-timeline";
import VerticalTimelineElement from "@/components/vertical-timeline-element";
import WorkIcon from "@/images/icons/work-experience/work";
import SchoolIcon from "@/images/icons/work-experience/school";
import StarIcon from "@/images/icons/work-experience/star";
import "./experience-timeline.css";
import { TimelineItem } from "@/queries/types";
import { getTimeline } from "@/queries/get-work-experience";

const WorkExperience: React.FC = () => {
  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | undefined>();

  useEffect(() => {
    function fetchTimelineItem() {
      const data = getTimeline();
      setTimeLineData(data);
    }
    fetchTimelineItem();
  }, []);

  if (!timeLineData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            className={`vertical-timeline-element--${item.timelineType}`}
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: index === 0 ? "7px solid rgb(33, 150, 243)" : "7px solid rgb(240, 240, 240)" }
                : { borderRight: "7px solid rgb(254, 215, 123)" }
            }
            contentStyle={
              item.timelineType === "work"
                ? { background: index === 0 ? "rgb(117, 192, 254)" : "rgb(240, 240, 240)", color: "#fff" }
                : { background: "rgb(254, 215, 123)", color: "#fff" }
            }
            date={item.dateRange}
            icon={item.timelineType === "work" ? <WorkIcon alt="Work Icon" /> : <SchoolIcon alt="School Icon" />}
            iconStyle={
              item.timelineType === "work"
                ? { background: "rgb(33, 150, 243)", color: "#fff" }
                : { background: "rgb(255, 202, 79)", color: "#fff" }
            }
            key={index}>
            <div style={{ color: "black" }}>
              <h3 className="vertical-timeline-element-title">{item.name}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
              <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
              {item.summaryPoints.map((element, index) => (
                <p key={index}>
                  <span style={{ color: "black" }}>➤</span> {element}
                </p>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement icon={<StarIcon alt="Star Icon" />} iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }} />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
