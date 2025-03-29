import Projects from "@/components/projects";
import type { Metadata } from "next";

export const metadata: Metadata = { description: "My projects with the tecnologies that were made", title: "Projects" };

const ProjectsPage: React.FC = () => {
  return <Projects />;
};

export default ProjectsPage;
