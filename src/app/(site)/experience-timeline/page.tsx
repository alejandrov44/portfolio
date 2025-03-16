import ExperienceTimeline from "@/components/experience-timeline";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Experience Timeline", description: "The experience timeline from studies and work" };

const ExperienceTimelinePage: React.FC = () => {
  return <ExperienceTimeline />;
};

export default ExperienceTimelinePage;
