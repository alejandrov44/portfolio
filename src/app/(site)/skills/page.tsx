import Skills from "@/components/skills";
import type { Metadata } from "next";

export const metadata: Metadata = { description: "The skills that i have learned to use.", title: "Skills" };

const SkillsPage: React.FC = () => {
  return <Skills />;
};

export default SkillsPage;
