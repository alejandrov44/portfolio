import { Skill, SkillCategories } from "@/queries/types";

const Skills: Skill[] = [
  {
    name: "Node.js",
    category: SkillCategories.Backend,
    description: "Backend Runtime",
    icon: "node",
  },
  {
    name: "Python",
    category: SkillCategories.Backend,
    description: "High-Level, General-Purpose Programming Language",
    icon: "python",
  },
  {
    name: "CI/CD",
    category: SkillCategories.CloudAndDevOps,
    description: "Continuous Integration & Delivery",
    icon: "docker",
  },
  {
    name: "Docker",
    category: SkillCategories.CloudAndDevOps,
    description: "Containerization",
    icon: "docker",
  },
  {
    name: "AWS",
    category: SkillCategories.CloudAndDevOps,
    description: "Cloud Platform",
    icon: "aws",
  },
  {
    name: "MySQL",
    category: SkillCategories.Databases,
    description: "Relational Database",
    icon: "mysql",
  },
  {
    name: "PostgreSQL",
    category: SkillCategories.Databases,
    description: "Relational Database",
    icon: "postgresql",
  },
  {
    name: "Prisma",
    category: SkillCategories.Databases,
    description: "Node.js ORM",
    icon: "prisma",
  },
  {
    name: "HTML&CSS",
    category: SkillCategories.Frontend,
    description: "Web Markup and Styling",
    icon: "website",
  },
  {
    name: "JavaScript",
    category: SkillCategories.Frontend,
    description: "Scripting Language",
    icon: "javascript",
  },
  {
    name: "TypeScript",
    category: SkillCategories.Frontend,
    description: "Type-safe JavaScript",
    icon: "typescript",
  },
  {
    name: "Next.js",
    category: SkillCategories.Frontend,
    description: "Frontend Framework",
    icon: "nextjs",
  },
  {
    name: "Gitlab",
    category: SkillCategories.OtherToolsAndPractices,
    description: "DevOps Platform",
    icon: "gitlab",
  },
  {
    name: "Github",
    category: SkillCategories.OtherToolsAndPractices,
    description: "DevOps Platform",
    icon: "github",
  },
  {
    name: "Playwright",
    category: SkillCategories.OtherToolsAndPractices,
    description: "Automation Library",
    icon: "test",
  },
  {
    name: "Appium",
    category: SkillCategories.OtherToolsAndPractices,
    description: "Automation Tool",
    icon: "appium",
  },
];

export async function getSkills(): Promise<Skill[]> {
  return await Skills;
}
