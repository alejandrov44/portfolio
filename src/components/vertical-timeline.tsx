import React from "react";
import "./vertical-timeline.css";

interface VerticalTimelineProperties {
  children: any;
}

const VerticalTimeline: React.FC<VerticalTimelineProperties> = ({ children }) => {
  if (typeof globalThis.window === "object") {
    document.documentElement.style.setProperty("--line-color", "#FFF");
  }
  return <div className={"vertical-timeline vertical-timeline--animate vertical-timeline--two-columns"}>{children}</div>;
};

export default VerticalTimeline;
