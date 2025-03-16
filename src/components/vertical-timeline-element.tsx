import React, { CSSProperties } from "react";
import { useInView } from "react-intersection-observer";
import "./vertical-timeline-element.css";

interface VerticalTimelineElementProperties {
  children?: React.JSX.Element;
  className?: string;
  contentStyle?: CSSProperties;
  contentArrowStyle?: CSSProperties;
  iconStyle: CSSProperties;
  date?: string;
  icon: React.JSX.Element;
}

const VerticalTimelineElement: React.FC<VerticalTimelineElementProperties> = ({
  children,
  className = "",
  contentStyle,
  contentArrowStyle,
  iconStyle,
  date = "",
  icon,
}) => {
  const { ref, inView } = useInView({ rootMargin: "0px 0px -40px 0px", triggerOnce: true });

  let iconClassNames = `vertical-timeline-element-icon shadow-size-small`;
  iconClassNames += inView ? " bounce-in" : " is-hidden";

  let textClassNames = `vertical-timeline-element-content`;
  textClassNames += inView ? " bounce-in" : " is-hidden";

  return (
    <div
      ref={ref}
      className={`${className} vertical-timeline-element ${children ? "" : "vertical-timeline-element--no-children"}`}
      style={undefined}>
      <React.Fragment>
        <span style={iconStyle} className={iconClassNames}>
          {icon}
        </span>
        <div style={contentStyle} className={textClassNames}>
          <div style={contentArrowStyle} className="vertical-timeline-element-content-arrow" />
          {children}
          <span className={"vertical-timeline-element-date"}>{date}</span>
        </div>
      </React.Fragment>
    </div>
  );
};

export default VerticalTimelineElement;
