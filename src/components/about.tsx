"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/src/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("A propos");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>A propos</SectionHeading>
      <p className="mb-3">
        Après avoir obtenu un diplôme de baccalauréat,{" "}
        {/* <span className="font-medium">Accounting</span>,  */}
        j'ai décidé de poursuivre ma passion pour la programmation et j'ai
        obtenu un diplôme de Master en informatique avec une spécialisation en
        génie logiciel. Je me suis inscrite à divers sites pour continuer à
        apprendre d'avantage.{" "}
        {/* <span className="font-medium">full-stack web development</span>.{" "} */}
        <span className="italic">
          Ce que je préfère dans la programmation,{" "}
        </span>
        c'est l'aspect résolution de problèmes.{" "}
        <span className="underline">J'aime </span>
        le sentiment de finalement comprendre et de trouver une solution à un
        problème.
        <span className="font-medium">
          React, Next.js, Node.js, Nest.js font partie de mes compétences.{" "}
        </span>
        Je suis également famillié avec java vert.x et android. Je cherche
        toujours à apprendre de nouvelles technologies. Je suis actuellement à
        la recherche d'un <span className="font-medium">poste horaire</span> en
        tant que développeur web ou mobile
      </p>
      <p>
        <span className="italic">En dehors de la programmation</span>, J'aime
        lire des livres et écrire, mais surtout voyager, faire des randonnées{" "}
        <span className="font-medium">
          J'aime aussi apprendre de nouvelles choses
        </span>
        . Actuellement, j'étudie{" "}
        <span className="font-medium"> la sécurité informatique. </span>
        Et je travaille à perfectionner mon anglais
      </p>
    </motion.section>
  );
}
