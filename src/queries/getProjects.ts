import { Project } from "@/interfaces";

const Projects: Project[] = [
  {
    title: "Portfolio",
    description: "This is my personal portfolio website project, deveoped using Next.js framework.",
    techUsed: "HTML5, CSS3, React, Next.js, Node.js",
    image: "portfolio",
  },
];

export async function getProjects(): Promise<Project[]> {
  return await Projects;
}
