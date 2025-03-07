import Projects from "@/components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "My projects with the tecnologies that were made",
};

const ProjectsPage: React.FC = () => {
  return <Projects />;
};

export default ProjectsPage;
