import Skills from "@/components/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description: "The skills that i have learned to use.",
};

const SkillsPage: React.FC = () => {
  return <Skills />;
};

export default SkillsPage;
