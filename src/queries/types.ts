import { JSX } from "react";

export enum SkillNames {
  NodeJs = "Node.js",
  Python = "Python",
  CICD = "CI/CD",
  Docker = "Docker",
  AWS = "AWS",
  MySQL = "MySQL",
  PostgreSQL = "PostgreSQL",
  Prisma = "Prisma",
  HTML = "HTML",
  CSS = "CSS",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  NextJs = "Next.js",
  Gitlab = "Gitlab",
  Github = "Github",
  Playwright = "Playwright",
  Appium = "Appium",
  Cheerio = "Cheerio",
  SteamAPI = "SteamAPI",
  Crawling = "Crawling",
  C = "C",
  CMake = "CMake",
  Allegro5 = "Allegro5",
  Test = "Test",
  React = "React",
}

/* eslint-disable unicorn/prevent-abbreviations */
export enum SkillCategories {
  Backend = "Backend",
  CloudAndDevOps = "Cloud & DevOps",
  Databases = "Databases",
  Frontend = "Frontend",
  OtherToolsAndPractices = "Other Tools & Practices",
}

export interface Skill {
  name: SkillNames;
  category: SkillCategories;
  description: string;
  icon: JSX.Element;
}

export interface TimelineItem {
  timelineType: "work" | "education";
  name: string;
  title: string;
  techStack: string;
  summaryPoints: string[];
  dateRange: string;
}

export interface Project {
  title: string;
  description: string;
  techUsed: SkillNames[];
  image: string;
}
