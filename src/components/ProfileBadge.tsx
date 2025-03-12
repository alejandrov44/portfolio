"use client";

import React from "react";
import "./ProfileBadge.css";
import Image from "next/image";
import LinkdinIcon from "@/images/icons/linkdin";
import DownloadIcon from "@/images/icons/download";
import GithubIcon from "@/images/icons/github";
import profilePic from "@/images/profilePic.webp";
import { basePath } from "../../next.config";

const ProfileBadge: React.FC = () => {
  return (
    <div className="linkedin-badge-custom">
      <Image src={profilePic} alt="Alejandro Viana" className="badge-avatar" priority={true} loading="eager" />
      <div className="badge-content">
        <h3 className="badge-name">Alejandro Viana</h3>
        <p className="badge-title">Software Engineer</p>
        <p className="badge-description">
          Dynamic and persevering Software Engineer with 3+ years in development <br></br>
          across many projects, skilled in Node.js and Python.
        </p>
        <p className="badge-company">Shopfully | LaSalle Universtity</p>
        <div>
          <a href="https://www.linkedin.com/in/alejandro-viana/" target="_blank" rel="noopener noreferrer" className="badge-link">
            <LinkdinIcon className="linkedin-icon" alt="Linkdin Icon" /> View Profile
          </a>
          <a href={`${basePath}/files/AlejandroResume.pdf`} target="_blank" rel="noopener noreferrer" className="download-button">
            <DownloadIcon className="download-icon" alt="Download Icon" /> Download CV
          </a>
          <a href="https://github.com/alejandrov44" target="_blank" rel="noopener noreferrer" className="github-button">
            <GithubIcon className="github-icon" alt="Github Icon" /> Check Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileBadge;
