import React from "react";
import "./VerticalTimeline.css";

interface VerticalTimelineProps {
  children: any;
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ children }) => {
  if (typeof window === "object") {
    document.documentElement.style.setProperty("--line-color", "#FFF");
  }
  return <div className={"vertical-timeline vertical-timeline--animate vertical-timeline--two-columns"}>{children}</div>;
};

export default VerticalTimeline;
