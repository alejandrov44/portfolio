"use client";

import React from "react";
import "./profile-badge.css";
import Image from "next/image";
import LinkdinIcon from "@/images/icons/linkdin";
import DownloadIcon from "@/images/icons/download";
import GithubIcon from "@/images/icons/github";
import profilePic from "@/images/profilePic.webp";
import { basePath } from "../../next.config";

const ProfileBadge: React.FC = () => {
  return (
    <div className="linkedin-badge-custom">
      <Image alt="Alejandro Viana" className="badge-avatar" loading="eager" priority={true} src={profilePic} />
      <div className="badge-content">
        <h3 className="badge-name">Alejandro Viana</h3>
        <p className="badge-title">Software Engineer</p>
        <p className="badge-description">
          Dynamic and persevering Software Engineer with 3+ years in development across many projects, skilled in Node.js and Python.
          <br></br>
        </p>
        <p className="badge-company">Shopfully | LaSalle Universtity</p>
        <div>
          <a className="badge-link" href="https://www.linkedin.com/in/alejandro-viana/" rel="noopener noreferrer" target="_blank">
            <LinkdinIcon alt="Linkdin Icon" className="linkedin-icon" /> View Profile
          </a>
          <a className="download-button" href={`${basePath}/files/AlejandroResume.pdf`} rel="noopener noreferrer" target="_blank">
            <DownloadIcon alt="Download Icon" className="download-icon" /> Download CV
          </a>
          <a className="github-button" href="https://github.com/alejandrov44" rel="noopener noreferrer" target="_blank">
            <GithubIcon alt="Github Icon" className="github-icon" /> Check Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileBadge;
