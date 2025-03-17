"use client";

import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import "./projects.css";
import { Project } from "@/queries/types";
import { getProjects } from "@/queries/get-projects";
import portfolioProjectImage from "@/images/projects/portfolio.webp";
import freeGamesAlertsImage from "@/images/projects/free-games-alerts.webp";
import lsRacingImage from "@/images/projects/ls-racing-logo.webp";
import skillIcons from "@/images/icons/skills/index";

const projectImages: Record<string, StaticImageData> = {
  portfolio: portfolioProjectImage,
  freeGamesAlerts: freeGamesAlertsImage,
  lsRacing: lsRacingImage,
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    function fetchProjects() {
      const data = getProjects();
      setProjects(data);
    }

    fetchProjects();
  }, []);

  if (projects.length === 0) return <div>Loading...</div>;

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}>
            <Image src={projectImages[project.image]} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-used">
                {project.techUsed.map((tech, index_) => (
                  <span key={index_} className="tech-badge">
                    {skillIcons[tech]} {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
