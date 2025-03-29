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
  icon: string;
  name: string;
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
  techUsed: string;
  title: string;
}
