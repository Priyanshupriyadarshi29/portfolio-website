
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";

import profile from "./assets/Blue_and_White_Vibrant_Geometric_Director_LinkedIn_Profile_Picture-removebg-preview (1).png";

import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import c from "./assets/techstack/c.webp";
import cpp from "./assets/techstack/cpp.png";
import expressjs from "./assets/techstack/express-js.png";
import mongodb from "./assets/techstack/mongodb.png";
import nodejs from "./assets/techstack/nodejs.png";
import python from "./assets/techstack/python.png";
import sql from "./assets/techstack/sql.png";

import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";

import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";

import projectImage1 from "./assets/projects/project1.avif";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.png";
import projectImage4 from "./assets/projects/project4.avif";
import projectImage5 from "./assets/projects/project5.jpg";



export const logos = {
  logogradient: logogradient,
  logo: logo,
};


export const personalDetails = {
  name: "Priyanshu Priyadarshi",
  tagline: "I build things for web",
  img: profile,
  about: `I’m Priyanshu Priyadarshi, a MERN Stack Developer. I build modern, responsive, and full-stack web applications using MongoDB, Express, React, and Node.js, turning ideas into clean, interactive, and scalable web solutions.`,
};


export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/priyanshu-priyadarshi-075673309/",
  github: "https://github.com/Priyanshupriyadarshi29"
};


export const workDetails = [
  {
    Position: "Mern stack developer",
    Company: `mainflow services and technologies`,
    Location: "Remote",
    Type: "Internship",
    Duration: "June 2025 - Aug 2025",
  }
];

export const eduDetails = [
  {
    Name: "National Institute of Technology, Rourkela",
    Location: "Rourkela, Odisha",
    Duration: "Nov 2022 - Present",
    Extra: "B.Tech in Chemical Engineering (CGPA - 6.47)"
  },
  {
    Name: "Central Public School, Saran",
    Location: "Saran, Bihar",
    Duration: "April 2021",
    Extra: "CBSE, Science (PCM) - 90.8%"
  },
  {
    Name: "Central Public School, Saran",
    Location: "Saran, Bihar",
    Duration: "April 2019",
    Extra: "CBSE - 94.8%"
  }
];


export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  c: c,
  cpp: cpp,
  expressjs: expressjs,
  mongodb: mongodb,
  nodejs: nodejs,
  python: python,
  sql: sql
};


export const projectDetails = [
  {
    title: "0xLeet",
    image: projectImage1,
    description: `A LeetCode practice assistant that helps users solve coding problems efficiently, track progress, and improve algorithmic skills.`,
    techstack: "React.js, Node.js, Express.js, MongoDB",
    githubLink: "https://github.com/Priyanshupriyadarshi29/0xLeet",
  },
  {
    title: "Study Notion Backend",
    image: projectImage2,
    description: `Backend of an online learning platform managing courses, users, and content using a robust API-driven architecture.`,
    techstack: "Node.js, Express.js, MongoDB",
    githubLink: "https://github.com/Priyanshupriyadarshi29/study-notion-backend",
  },
  {
    title: "Discord Chatbot",
    image: projectImage3,
    description: `A chatbot for Discord servers to automate tasks, provide fun interactions, and enhance community engagement.`,
    techstack: "Node.js, Discord.js",
    githubLink: "https://github.com/Priyanshupriyadarshi29/discord-chatbot",
  },
  {
    title: "Netflix EDA using SQL",
    image: projectImage4,
    description: `Exploratory Data Analysis on Netflix dataset using SQL to generate insights, trends, and visual reports.`,
    techstack: "SQL, MySQL, Data Analysis",
    githubLink: "https://github.com/Priyanshupriyadarshi29/netflix-eda-using-sql",
  },
  {
    title: "Retail Sales EDA",
    image: projectImage5,
    description: `Data analysis on retail sales to uncover patterns, forecast trends, and support business decisions.`,
    techstack: "Python, Pandas, Matplotlib, SQL",
    githubLink: "https://github.com/Priyanshupriyadarshi29/retail-sales-eda",
  },
];

export const contactDetails = {
  email: "priyanshupriyadarshi1908@gmail.com.com",
};
