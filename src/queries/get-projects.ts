import { Project } from "@/queries/types";

const Projects: Project[] = [
  {
    description: "This is my personal portfolio website project, deveoped using Next.js framework.",
    image: "portfolio",
    techUsed: "HTML5, CSS3, React, Next.js, Node.js",
    title: "Portfolio",
  },
  {
    description:
      "A simple way to get notified 📨 with all the info about every new free game on the main videogame platforms, like steam, epic or gog 🎮.",
    image: "freeGamesAlerts",
    techUsed: "Node.js, Crawling, Cheerio, Steam API",
    title: "Free Games Alerts",
  },
];

export function getProjects(): Project[] {
  return Projects;
}
