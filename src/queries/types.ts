import { JSX } from "react";

export enum SkillNames {
  AWS = "AWS",
  Allegro5 = "Allegro5",
  Appium = "Appium",
  C = "C",
  CICD = "CI/CD",
  CMake = "CMake",
  CSS = "CSS",
  Cheerio = "Cheerio",
  Crawling = "Crawling",
  Docker = "Docker",
  Github = "Github",
  Gitlab = "Gitlab",
  HTML = "HTML",
  JavaScript = "JavaScript",
  MySQL = "MySQL",
  NextJs = "Next.js",
  NodeJs = "Node.js",
  Playwright = "Playwright",
  PostgreSQL = "PostgreSQL",
  Prisma = "Prisma",
  Python = "Python",
  React = "React",
  SteamAPI = "SteamAPI",
  Test = "Test",
  TypeScript = "TypeScript",
}

export enum SkillCategories {
  Backend = "Backend",
  CloudAndDevOps = "Cloud & DevOps",
  Databases = "Databases",
  Frontend = "Frontend",
  OtherToolsAndPractices = "Other Tools & Practices",
}

export interface Skill {
  category: SkillCategories;
  description: string;
  icon: JSX.Element;
  name: SkillNames;
}

export interface TimelineItem {
  dateRange: string;
  name: string;
  summaryPoints: string[];
  techStack: string;
  timelineType: "work" | "education";
  title: string;
}

export interface Project {
  description: string;
  image: string;
  techUsed: SkillNames[];
  title: string;
}
