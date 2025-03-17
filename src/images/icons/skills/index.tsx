import AppiumIcon from "./appium";
import AwsIcon from "./aws";
import CheerioIcon from "./cheerio";
import DockerIcon from "./docker";
import GithubIcon from "./github";
import GitlabIcon from "./gitlab";
import JavascriptIcon from "./javascript";
import MySQLIcon from "./my-sql";
import NextJsIcon from "./nextjs";
import NodeJsIcon from "./node";
import PostgreSQLIcon from "./postgresql";
import PrismaIcon from "./prisma";
import PythonIcon from "./python";
import ReactIcon from "./react";
import SteamIcon from "./steam";
import TestIcon from "./test";
import TypescriptIcon from "./typescript";
import WebsiteIcon from "./website";
import CIcon from "./c";
import ScrappyIcon from "./scrapy";
import CMakeIcon from "./cmake";
import AllegroIcon from "./allegro";
import HTMLIcon from "./html";
import CSSIcon from "./css";
import { JSX } from "react";
import { SkillNames } from "@/queries/types";

const skillIcons: Record<string, JSX.Element> = {
  [SkillNames.C]: <CIcon alt="C Icon" />,
  [SkillNames.AWS]: <AwsIcon alt="AWS Icon" />,
  [SkillNames.Test]: <TestIcon alt="Test Icon" />,
  [SkillNames.React]: <ReactIcon alt="React Icon" />,
  [SkillNames.MySQL]: <MySQLIcon alt="MySQL Icon" />,
  [SkillNames.CSS]: <CSSIcon alt="Website Icon" />,
  [SkillNames.Docker]: <DockerIcon alt="Docker Icon" />,
  [SkillNames.Appium]: <AppiumIcon alt="Appium Icon" />,
  [SkillNames.Github]: <GithubIcon alt="Github Icon" />,
  [SkillNames.Gitlab]: <GitlabIcon alt="Gitlab Icon" />,
  [SkillNames.NextJs]: <NextJsIcon alt="NextJs Icon" />,
  [SkillNames.Python]: <PythonIcon alt="Python Icon" />,
  [SkillNames.Prisma]: <PrismaIcon alt="Prisma Icon" />,
  [SkillNames.HTML]: <HTMLIcon alt="Website Icon" />,
  [SkillNames.NodeJs]: <NodeJsIcon alt="NodeJs Icon" />,
  [SkillNames.Cheerio]: <CheerioIcon alt="Cheerio Icon" />,
  [SkillNames.SteamAPI]: <SteamIcon alt="Steam Icon" />,
  [SkillNames.Crawling]: <ScrappyIcon alt="Crawling Icon" />,
  [SkillNames.JavaScript]: <JavascriptIcon alt="Javascript Icon" />,
  [SkillNames.TypeScript]: <TypescriptIcon alt="Typescript Icon" />,
  [SkillNames.PostgreSQL]: <PostgreSQLIcon alt="PostgreSQL Icon" />,
  [SkillNames.CMake]: <CMakeIcon alt="CMake Icon" />,
  [SkillNames.Allegro5]: <AllegroIcon alt="Allegro Icon" />,
};

export default skillIcons;
