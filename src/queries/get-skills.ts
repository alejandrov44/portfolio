import skillIcons from "@/images/icons/skills";
import { Skill, SkillCategories, SkillNames } from "@/queries/types";

const Skills: Skill[] = [
  { category: SkillCategories.Backend, description: "Backend Runtime", icon: skillIcons[SkillNames.NodeJs], name: SkillNames.NodeJs },
  {
    category: SkillCategories.Backend,
    description: "High-Level, General-Purpose Programming Language",
    icon: skillIcons[SkillNames.Python],
    name: SkillNames.Python,
  },
  {
    category: SkillCategories.CloudAndDevOps,
    description: "Continuous Integration & Delivery",
    icon: skillIcons[SkillNames.Docker],
    name: SkillNames.CICD,
  },
  {
    category: SkillCategories.CloudAndDevOps,
    description: "Containerization",
    icon: skillIcons[SkillNames.Docker],
    name: SkillNames.Docker,
  },
  { category: SkillCategories.CloudAndDevOps, description: "Cloud Platform", icon: skillIcons[SkillNames.AWS], name: SkillNames.AWS },
  { category: SkillCategories.Databases, description: "Relational Database", icon: skillIcons[SkillNames.MySQL], name: SkillNames.MySQL },
  {
    category: SkillCategories.Databases,
    description: "Relational Database",
    icon: skillIcons[SkillNames.PostgreSQL],
    name: SkillNames.PostgreSQL,
  },
  { category: SkillCategories.Databases, description: "Node.js ORM", icon: skillIcons[SkillNames.Prisma], name: SkillNames.Prisma },
  { category: SkillCategories.Frontend, description: "Web Markup", icon: skillIcons[SkillNames.HTML], name: SkillNames.HTML },
  { category: SkillCategories.Frontend, description: "Web Styling", icon: skillIcons[SkillNames.CSS], name: SkillNames.CSS },
  {
    category: SkillCategories.Frontend,
    description: "Scripting Language",
    icon: skillIcons[SkillNames.JavaScript],
    name: SkillNames.JavaScript,
  },
  {
    category: SkillCategories.Frontend,
    description: "Type-safe JavaScript",
    icon: skillIcons[SkillNames.TypeScript],
    name: SkillNames.TypeScript,
  },
  { category: SkillCategories.Frontend, description: "Frontend Framework", icon: skillIcons[SkillNames.NextJs], name: SkillNames.NextJs },
  {
    category: SkillCategories.OtherToolsAndPractices,
    description: "DevOps Platform",
    icon: skillIcons[SkillNames.Gitlab],
    name: SkillNames.Gitlab,
  },
  {
    category: SkillCategories.OtherToolsAndPractices,
    description: "DevOps Platform",
    icon: skillIcons[SkillNames.Github],
    name: SkillNames.Github,
  },
  {
    category: SkillCategories.OtherToolsAndPractices,
    description: "Automation Library",
    icon: skillIcons[SkillNames.Test],
    name: SkillNames.Playwright,
  },
  {
    category: SkillCategories.OtherToolsAndPractices,
    description: "Automation Tool",
    icon: skillIcons[SkillNames.Appium],
    name: SkillNames.Appium,
  },
];

export function getSkills(): Skill[] {
  return Skills;
}
