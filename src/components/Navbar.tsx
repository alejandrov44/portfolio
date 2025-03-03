"use client";

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@/images/icons/home";
import ProfessionalIcon from "@/images/icons/professional";
import SkillsIcon from "@/images/icons/skills";
import ProjectsIcon from "@/images/icons/projects";
import pageLogo from "@/images/logos/logo.png";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        <div className="navbar-left">
          <Link href="/" className="navbar-logo">
            <Image src={pageLogo} alt="Page Logo" />
          </Link>
          <ul className="navbar-links">
            <li>
              <Link href="/">Contact Me</Link>
            </li>
            <li>
              <Link href="/work-experience">Professional</Link>
            </li>
            <li>
              <Link href="/skills">Skills</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
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
            <Link href="/work-experience" onClick={closeSidebar}>
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
