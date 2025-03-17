"use client";

import React, { useState, useEffect } from "react";
import "./navbar.css";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@/images/icons/page/home";
import ProfessionalIcon from "@/images/icons/page/professional";
import SkillsIcon from "@/images/icons/page/skills";
import ProjectsIcon from "@/images/icons/page/projects";
import pageLogo from "@/images/logos/logo-50x50.webp";
import { getGitHubStars } from "@/queries/get-github-stars";

const formatStars = (count: number): string => {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [stars, setStars] = useState<number | undefined>();
  const repo = "alejandrov44/portfolio";

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    void getGitHubStars(repo).then(setStars);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <Link href="/" className="navbar-logo">
            <Image src={pageLogo} alt="Page Logo" priority={true} />
          </Link>
          <ul className="navbar-links">
            <li>
              <Link href="/">Contact Me</Link>
            </li>
            <li>
              <Link href="/experience-timeline">Professional</Link>
            </li>
            <li>
              <Link href="/skills">Skills</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
          <div className="github-stars-button">
            <a href={`https://github.com/${repo}`} target="_blank" rel="noopener noreferrer" className="github-stars-link">
              <svg viewBox="0 0 16 16" height="1.5em" width="1.5em" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              Star the project on GitHub
              {stars && <span className="github-stars-number">{formatStars(stars)}</span>}
            </a>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="hamburger" onClick={toggleSidebar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div className={`sidebar-overlay ${isSidebarOpen ? "open" : ""}`} onClick={closeSidebar}></div>

      {/* Sidebar (only visible on mobile) */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <Image src={pageLogo} alt="Page Logo" />
        </div>
        <ul>
          <li>
            <Link href="/" onClick={closeSidebar}>
              <HomeIcon alt="Home Icon" /> Contact Me
            </Link>
          </li>
          <li>
            <Link href="/experience-timeline" onClick={closeSidebar}>
              <ProfessionalIcon alt="Professional Icon" /> Professional
            </Link>
          </li>
          <li>
            <Link href="/skills" onClick={closeSidebar}>
              <SkillsIcon alt="Skills Icon" /> Skills
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={closeSidebar}>
              <ProjectsIcon alt="Projects Icon" /> Projects
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
