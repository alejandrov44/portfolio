"use client";

import React, { JSX, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import "./projects.css";
import { Project } from "@/queries/types";
import { getProjects } from "@/queries/get-projects";
import portfolioProjectImage from "@/images/projects/portfolio.webp";
import freeGamesAlertsImage from "@/images/projects/free-games-alerts.webp";
import { ReactIcon, NodeJsIcon, NextJsIcon, WebsiteIcon, CheerioIcon, SteamIcon } from "@/images/icons/skills/index";

const projectImages: Record<string, StaticImageData> = { portfolio: portfolioProjectImage, freeGamesAlerts: freeGamesAlertsImage };

const techIcons: Record<string, JSX.Element> = {
  HTML5: <WebsiteIcon alt="Website Icon" />,
  CSS3: <WebsiteIcon alt="Website Icon" />,
  React: <ReactIcon alt="React Icon" />,
  "Next.js": <NextJsIcon alt="NextJs Icon" />,
  "Node.js": <NodeJsIcon alt="NodeJs Icon" />,
  Crawling: <WebsiteIcon alt="Crawling Icon" />,
  Cheerio: <CheerioIcon alt="Cheerio Icon" />,
  "Steam API": <SteamIcon alt="Steam Icon" />,
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
                {project.techUsed.split(", ").map((tech, index_) => (
                  <span key={index_} className="tech-badge">
                    {techIcons[tech]} {tech}
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
