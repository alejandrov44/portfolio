/* eslint-disable unicorn/prefer-spread */
"use client";

import React, { useEffect, useState } from "react";
import "./skills.css";
import { getSkills } from "@/queries/get-skills";
import { Skill } from "@/queries/types";

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
                <div className="icon">{skill.icon}</div>
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
