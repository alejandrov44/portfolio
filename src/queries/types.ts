/* eslint-disable unicorn/prevent-abbreviations */
export enum SkillCategories {
  Backend = "Backend",
  CloudAndDevOps = "Cloud & DevOps",
  Databases = "Databases",
  Frontend = "Frontend",
  OtherToolsAndPractices = "Other Tools & Practices",
}

export interface Skill {
  name: string;
  category: SkillCategories;
  description: string;
  icon: string;
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
  techUsed: string;
  image: string;
}
