import { Project, SkillNames } from "@/queries/types";

const Projects: Project[] = [
  {
    title: "Portfolio",
    description: "This is my personal portfolio website project, deveoped using Next.js framework.",
    techUsed: [SkillNames.HTML, SkillNames.CSS, SkillNames.React, SkillNames.NextJs, SkillNames.NodeJs],
    image: "portfolio",
  },
  {
    title: "Free Games Alerts",
    description: "A simple way to get notified 📨 with all the info about every new free game on the main videogame platforms, like steam, epic or gog 🎮.",
    techUsed: [SkillNames.NodeJs, SkillNames.Crawling, SkillNames.Cheerio, SkillNames.SteamAPI],
    image: "freeGamesAlerts",
  },
  {
    title: "LS Racing",
    description: "Racing simulator game 🏎️ written in C, using the Allegro 5 library for graphics and input.",
    techUsed: [SkillNames.C, SkillNames.CMake, SkillNames.Allegro5],
    image: "lsRacing",
  },
];

export function getProjects(): Project[] {
  return Projects;
}
