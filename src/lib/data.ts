import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import oke from "@/public/okeee.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import fapbm from "@/public/fapbm.jpg"

export const links = [
  {
    name: "Acceuil",
    hash: "#home",
  },
  {
    name: "A propos",
    hash: "#about",
  },
  {
    name: "Projets",
    hash: "#projects",
  },
  {
    name: "Compétences",
    hash: "#skills",
  },
  {
    name: "Expériences",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Stagiaire BNI",
    location: "BNI Madagascar",
    description:
      "Stage dans la direction juridique et contentieux",
    icon: React.createElement(CgWorkAlt),
    date: "2018",
  },
  {
    title: "Stagiaire BOA",
    location: "BOA Madagascar",
    description:
      "Stage d'analyse",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "Stagiaire BOA",
    location: "BOA Madagascar",
    description:
      "Stage de perfectionnement",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
 
  {
    title: "Master en finances et comptabilité",
    location: "",
    description:
      "Aprés des années d'études, j'ai obtenu mon diplôme de Master en finances et comptabilité",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Data analyst Junior",
    location: "Cabinet d'externalisation KARLIT",
    description:
      "J'ai travaillé comme Data analyst niveau 1 dans la comptabilité",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Cadre logistique bilingue ang - fr",
    location: "CSS",
    description:
      "J'étais dans la coordination de la logistique d'un commissionnaire de transport",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Conseiller client",
    description:
      "J'ai travaillé dans le centre de relation client chez ADM Value",
    imageUrl: corpcommentImg,
  },
  {
    title: "Data analyst Junior",
    description:
      "Cabinet d'externalisation KARLIT",
    imageUrl: rmtdevImg,
  },
  {
    title: "Cadre logistique bilingue ang - fr",
    description:
      "J'étais dans la coordination de la logistique d'un commissionnaire de transport",
    imageUrl: fapbm,
  },
  
] as const;

export const skillsData = [
  "Excel avancé",
  "Sage Koala",
  "Odoo",
  "Word",
  "Excel",
  "Power POinte",
  "ChatGPT",
  "Agile - scrum",
  "Trello",
  "Windows",
  "Mac",
] as const;
