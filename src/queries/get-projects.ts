import { Project, SkillNames } from "@/queries/types";

const Projects: Project[] = [
  {
    description: "This is my personal portfolio website project, deveoped using Next.js framework.",
    image: "portfolio",
    techUsed: [SkillNames.HTML, SkillNames.CSS, SkillNames.React, SkillNames.NextJs, SkillNames.NodeJs],
    title: "Portfolio",
  },
  {
    description:
      "A simple way to get notified 📨 with all the info about every new free game on the main videogame platforms, like steam, epic or gog 🎮.",
    image: "freeGamesAlerts",
    techUsed: [SkillNames.NodeJs, SkillNames.Crawling, SkillNames.Cheerio, SkillNames.SteamAPI],
    title: "Free Games Alerts",
  },
  {
    description: "Racing simulator game 🏎️ written in C, using the Allegro 5 library for graphics and input.",
    image: "lsRacing",
    techUsed: [SkillNames.C, SkillNames.CMake, SkillNames.Allegro5],
    title: "LS Racing",
  },
];

export function getProjects(): Project[] {
  return Projects;
}
