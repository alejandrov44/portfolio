import React, { CSSProperties } from "react";
import { useInView } from "react-intersection-observer";
import "./VerticalTimelineElement.css";

interface VerticalTimelineElementProps {
  children?: React.JSX.Element;
  className?: string;
  contentStyle?: CSSProperties;
  contentArrowStyle?: CSSProperties;
  iconStyle: CSSProperties;
  date?: string;
  icon: React.JSX.Element;
}

const VerticalTimelineElement: React.FC<VerticalTimelineElementProps> = ({
  children = undefined,
  className = "",
  contentStyle = undefined,
  contentArrowStyle = undefined,
  iconStyle = undefined,
  date = "",
  icon = undefined,
}) => {
  const { ref, inView } = useInView({
    rootMargin: "0px 0px -40px 0px",
    triggerOnce: true,
  });

  let iconClassNames = `vertical-timeline-element-icon shadow-size-small`;
  if (inView) iconClassNames += " bounce-in";
  else iconClassNames += " is-hidden";

  let textClassNames = `vertical-timeline-element-content`;
  if (inView) textClassNames += " bounce-in";
  else textClassNames += " is-hidden";

  return (
    <div
      ref={ref}
      className={`${className} vertical-timeline-element ${!children ? "vertical-timeline-element--no-children" : ""}`}
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
