"use client";

import React, { JSX, useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import "./Projects.css";
import { Project } from "@/queries/types";
import { getProjects } from "@/queries/getProjects";
import portfolioProjectImage from "@/images/projects/portfolio.webp";
import {
  // TypescriptIcon,
  // MySQLIcon,
  // PostgreSQLIcon,
  // JavascriptIcon,
  // DockerIcon,
  ReactIcon,
  // AwsIcon,
  // TestIcon,
  // AppiumIcon,
  // GithubIcon,
  // GitlabIcon,
  NodeJsIcon,
  NextJsIcon,
  // PythonIcon,
  // PrismaIcon,
  WebsiteIcon,
} from "@/images/icons/skills/index";

const projectImages: { [key: string]: StaticImageData } = {
  portfolio: portfolioProjectImage,
};

const techIcons: { [key: string]: JSX.Element } = {
  HTML5: <WebsiteIcon alt="Website Icon" />,
  CSS3: <WebsiteIcon alt="Website Icon" />,
  React: <ReactIcon alt="React Icon" />,
  "Next.js": <NextJsIcon alt="NextJs Icon" />,
  "Node.js": <NodeJsIcon alt="NodeJs Icon" />,
};

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const data = await getProjects();
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
                {project.techUsed.split(", ").map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {techIcons[tech] || "🔧"} {tech}
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
