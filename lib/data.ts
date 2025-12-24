import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import reciepeVerse from "@/public/reciepeVerse.png";
import zeroGravity from "@/public/luma-zero-gravity-temp.png";
import icon from "react-syntax-highlighter/dist/esm/languages/prism/icon";
import { time } from "console";
import { on } from "events";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },

] as const;

export const experiencesData = [
  {
    title: `Computer Science`,
    location: "Kola Saraswathi Vaishnav Senior Secondary School",
    description:
      "Marks: 78.8%",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2023",
  },
  {
    title: `Electrical And Electronics Engineering`,
    location: "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY",
    description:
      "GPA: 8.49 (till 4th sem)",
    icon: React.createElement(LuGraduationCap),
    date: "2023-2027",
  },
  {
    title: "CODEZILLA CLUB",
    location: "Web Developer",
    description:
      "Community Organizer managing end-to-end technical operations, troubleshooting, and seamless event execution for major campus initiatives. Technical Mentor and Facilitator, conducting hands-on training sessions on open-source software, version control, and foundational web development",
    icon: React.createElement(CgWorkAlt),
    date: "July2024 - Mar2025",
  },

  {
    title: `IIE Innovation Centre, SRMIST Ramapuram`,
    location: "Technical Member",
    description:
      "Coordinated research and development projects, ensuring timely completion and efficient resource utilization.\nCollaborated with students, faculty, and industry experts to foster innovation and knowledge sharing.\nOrganized workshops, technical events, and competitions to enhance learning and practical skills",
    icon: React.createElement(LuGraduationCap),
    date: "July2024 - Aug2025",
  },

  {
    title: "Intern",
    location: "Tangedco",
    description:
      `Focused on electrical power distribution and control, managing grid loads through SCADA systems and Ring Main Unit (RMU) operations. Responsible for EHT/HT underground cable testing, fault localization, and producing technical route drawings using AutoCAD. Collaborated on substation and transformer maintenance to ensure operational efficiency and stable power delivery.`,
    icon: React.createElement(CgWorkAlt),
    date: "June 2025 - June 2025",
  },
  {
    title: "Digital Dreamers Den (D3)",
    location: "Live streaming",
    description:
      "Conducting live streaming sessions for community events, ensuring seamless engagement.\nProficient in using OBS Studio for professional broadcasting, screen sharing, and overlays.\nManaged real-time audience interaction, enhancing participation and visibility of the events.\nBoosted community outreach by delivering high-quality, interactive live content",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2025 - Present",
  },



] as const;

export const projectsData = [
  {
    title: "RecipeVerse",
    description:
      "An AI-driven culinary hub for seamless recipe generation and management using Next.js, Firebase, and Genkit.",
    tags: ["React", "API", "JavaScript", "Tailwind CSS", "Firebase", "Genkit", "Radix UI"],
    imageUrl: reciepeVerse,
  },

  {
    title: "zero-gravity(temp photo)",
    description:
      "​The Zero Gravity Hackathon 2025 is a 48-hour coding marathon aimed at fostering innovation, collaboration, and practical learning among students.",
    tags: ["Next.js", "Firebase", "Prisma", "Tailwind CSS",],
    imageUrl: zeroGravity,

  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "TypeScript",
  "React",
  "FastApi",
  "NextJs",
  "NodeJs",
  "Git",
  "Github",
  "Supabase",
  "SQL",
  "Tailwind",
  "Postman",
  "C",
  "canva",



] as const;