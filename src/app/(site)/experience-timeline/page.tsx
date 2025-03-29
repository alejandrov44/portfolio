import ExperienceTimeline from "@/components/experience-timeline";
import type { Metadata } from "next";

export const metadata: Metadata = { description: "The experience timeline from studies and work", title: "Experience Timeline" };

const ExperienceTimelinePage: React.FC = () => {
  return <ExperienceTimeline />;
};

export default ExperienceTimelinePage;
