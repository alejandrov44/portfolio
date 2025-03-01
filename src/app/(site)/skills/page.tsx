"use client";

import React, { JSX, useEffect, useState } from "react";
import "./skills.css";
import { getSkills } from "@/queries/getSkills";
import { Skill } from "@/interfaces";
import {
  TypescriptIcon,
  MySQLIcon,
  PostgreSQLIcon,
  JavascriptIcon,
  DockerIcon,
  ReactIcon,
  AwsIcon,
  TestIcon,
  AppiumIcon,
  GithubIcon,
  GitlabIcon,
  NodeJsIcon,
  NextJsIcon,
  PythonIcon,
  PrismaIcon,
  WebsiteIcon,
} from "@/images/icons/skills/index";

const iconMap: { [key: string]: JSX.Element } = {
  aws: <AwsIcon alt={"AWS Icon"} />,
  test: <TestIcon alt={"Test Icon"} />,
  node: <NodeJsIcon alt={"Node Icon"} />,
  react: <ReactIcon alt={"React Icon"} />,
  mysql: <MySQLIcon alt={"MySQL Icon"} />,
  website: <WebsiteIcon alt={"Website Icon"} />,
  docker: <DockerIcon alt={"Docker Icon"} />,
  appium: <AppiumIcon alt={"Appium Icon"} />,
  github: <GithubIcon alt={"Github Icon"} />,
  gitlab: <GitlabIcon alt={"Gitlab Icon"} />,
  nextjs: <NextJsIcon alt={"NextJs Icon"} />,
  python: <PythonIcon alt={"Python Icon"} />,
  prisma: <PrismaIcon alt={"Prisma Icon"} />,
  javascript: <JavascriptIcon alt={"Javascript Icon"} />,
  typescript: <TypescriptIcon alt={"Typescript Icon"} />,
  postgresql: <PostgreSQLIcon alt={"PostgreSQL Icon"} />,
};

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }

    fetchSkills();
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <ReactIcon alt={"React Icon"} />}</div>
                <h3 className="skill-name">
                  {skill.name.split("").map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
