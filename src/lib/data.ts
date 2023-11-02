import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Master en informatique",
    location: "",
    description:
      "Aprés des années d'études, j'ai obtenu mon diplôme de Master en infomatique option génie logiciel",
    icon: React.createElement(LuGraduationCap),
    date: "2017",
  },
  {
    title: "Développeur Java",
    location: "Freelance",
    description:
      "Développement d'une application mobile applicative sous android natif.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2017",
  },
  {
    title: "Développeur fullstack et chef de projet",
    location: "Kapital plus plus",
    description:
      "Développement d'une plateforme de paiement mobile. Mes stack sont: ionic, typescript, angular, java",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2019",
  },
  {
    title: "Développeur fullstack",
    location: "Ibonia",
    description:
      "J'ai travaillé en tant que préstataire Ibonia chez Orange Madagascar pendant 1 ans (Angular et java), et 2 ans des les locaux d'ibonia ou j'ai pu apprendre et acquérir des nouvelles connaissances (React.js - next.js et Node.js - Nest.js, Stripe)",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Développeur fullstack",
    location: "Freelance",
    description:
      "Je suis maintenant un développeur fullstack travaillant en freelance. Mon stack comprend React, Next.js, TypeScript, Node.js, Nest.js, et Postgresql. Je suis ouvert aux opportunités à temps plein.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Facturation chez Orange Madagascar",
    description:
      "J'ai travaillé en tant que développeur fullstack pendant 1 ans.",
    tags: ["Angular", "Java", "Vert.x", "Postresql"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Système de reservation et paiement en ligne",
    description:
      "Intégration sur le back-office d'un restaurateur (Suisse), intégration d'un module de paiement stripe",
    tags: ["React.js", "Next.js", "Node.js", "Nest.js", "stripe"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Site internet FAPBM",
    description:
      "Développement d'une carte interactive en react.js en montrant les aires protégées de Madagascar et l'intégrant dans le site FAPBM sous wordpress",
    tags: ["React", "Wordpress"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Nest.js",
  "Java",
  "vert.x",
  "Wordpress",
  "Stripe",
  "Git",
  "Bitbucket",
  "Confluence",
  "Jira",,
  "Agile - scrum",
  "Trello",
  "Express",
  "PostgreSQL",
  "Linux",
  "Windows",
  "Mac"
] as const;
