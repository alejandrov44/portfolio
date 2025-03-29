import React, { CSSProperties } from "react";
import { useInView } from "react-intersection-observer";
import "./vertical-timeline-element.css";

interface VerticalTimelineElementProperties {
  children?: React.JSX.Element;
  className?: string;
  contentArrowStyle?: CSSProperties;
  contentStyle?: CSSProperties;
  date?: string;
  icon: React.JSX.Element;
  iconStyle: CSSProperties;
}

const VerticalTimelineElement: React.FC<VerticalTimelineElementProperties> = ({
  children,
  className = "",
  contentArrowStyle,
  contentStyle,
  date = "",
  icon,
  iconStyle,
}) => {
  const { inView, ref } = useInView({ rootMargin: "0px 0px -40px 0px", triggerOnce: true });

  let iconClassNames = `vertical-timeline-element-icon shadow-size-small`;
  iconClassNames += inView ? " bounce-in" : " is-hidden";

  let textClassNames = `vertical-timeline-element-content`;
  textClassNames += inView ? " bounce-in" : " is-hidden";

  return (
    <div
      className={`${className} vertical-timeline-element ${children ? "" : "vertical-timeline-element--no-children"}`}
      ref={ref}
      style={undefined}>
      <React.Fragment>
        <span className={iconClassNames} style={iconStyle}>
          {icon}
        </span>
        <div className={textClassNames} style={contentStyle}>
          <div className="vertical-timeline-element-content-arrow" style={contentArrowStyle} />
          {children}
          <span className={"vertical-timeline-element-date"}>{date}</span>
        </div>
      </React.Fragment>
    </div>
  );
};

export default VerticalTimelineElement;
