/* eslint-disable unicorn/prefer-spread */
"use client";

import React, { JSX, useEffect, useState } from "react";
import "./skills.css";
import { getSkills } from "@/queries/get-skills";
import { Skill } from "@/queries/types";
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

const iconMap: Record<string, JSX.Element> = {
  aws: <AwsIcon alt="AWS Icon" />,
  test: <TestIcon alt="Test Icon" />,
  node: <NodeJsIcon alt="Node Icon" />,
  react: <ReactIcon alt="React Icon" />,
  mysql: <MySQLIcon alt="MySQL Icon" />,
  website: <WebsiteIcon alt="Website Icon" />,
  docker: <DockerIcon alt="Docker Icon" />,
  appium: <AppiumIcon alt="Appium Icon" />,
  github: <GithubIcon alt="Github Icon" />,
  gitlab: <GitlabIcon alt="Gitlab Icon" />,
  nextjs: <NextJsIcon alt="NextJs Icon" />,
  python: <PythonIcon alt="Python Icon" />,
  prisma: <PrismaIcon alt="Prisma Icon" />,
  javascript: <JavascriptIcon alt="Javascript Icon" />,
  typescript: <TypescriptIcon alt="Typescript Icon" />,
  postgresql: <PostgreSQLIcon alt="PostgreSQL Icon" />,
};

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    function fetchSkills() {
      const data = getSkills();
      setSkillsData(data);
    }

    fetchSkills();
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory: Record<string, Skill[]> = {};
  for (const skill of skillsData) {
    (skillsByCategory[skill.category] ??= []).push(skill);
  }

  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill, index_: number) => (
              <div key={index_} className="skill-card">
                <div className="icon">{iconMap[skill.icon]}</div>
                <h3 className="skill-name">
                  {skill.name.split("").map((letter: any, index__: number) => (
                    <span key={index__} className="letter" style={{ animationDelay: `${index__ * 0.05}s` }}>
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
