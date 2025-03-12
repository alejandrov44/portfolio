import { Project } from "@/queries/types";

const Projects: Project[] = [
  {
    title: "Portfolio",
    description: "This is my personal portfolio website project, deveoped using Next.js framework.",
    techUsed: "HTML5, CSS3, React, Next.js, Node.js",
    image: "portfolio",
  },
  {
    title: "Free Games Alerts",
    description:
      "A simple way to get notified 📨 with all the info about every new free game on the main videogame platforms, like steam, epic or gog 🎮.",
    techUsed: "Node.js, Crawling, Cheerio, Steam API",
    image: "freeGamesAlerts",
  },
];

export async function getProjects(): Promise<Project[]> {
  return await Projects;
}
