import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lgl:flex-row gap-20"
    >
      {/* Column 1 - Events & Organization */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-4xl font-bold">Participation aux Événements</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Journée Portes Ouvertes (JPO)"
            subTitle="École Polytechnique Sousse"
            result="Sousse"
            des="Participation active à l'organisation de la Journée Portes Ouvertes et de l'événement Nuit de l'Informatique, mettant en avant les projets académiques et étudiants."
          />
          <ResumeCard
            title="OpenIA - 2ème Édition"
            subTitle="École Polytechnique Sousse"
            result="Sousse"
            des="Participation à l'événement OpenIA centré sur les tendances et les innovations en intelligence artificielle."
          />
          <ResumeCard
            title="Nuit de l'Informatique"
            subTitle="École Polytechnique Sousse"
            result="Sousse"
            des="Aide à l'organisation de cet événement majeur en technologie, visant à promouvoir les projets étudiants et la créativité numérique."
          />
        </div>
      </div>

      {/* Column 2 - Clubs & Social Projects */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-4xl font-bold">Engagements Sociaux & Clubs</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Événement Reyada"
            subTitle="École Polytechnique Sousse"
            result="Sousse"
            des="Participation à l'événement Reyada, centré sur l'entrepreneuriat et l'innovation, favorisant le leadership et la présentation de projets."
          />
          <ResumeCard
            title="Microsoft Club"
            subTitle="Polytechnique Sousse"
            result="Sousse"
            des="Membre du Microsoft Club, contribuant à l'organisation d'ateliers technologiques et de rencontres pour les étudiants passionnés de technologie."
          />
          <ResumeCard
            title="PSC - Projet Socio-Culturel"
            subTitle="École Polytechnique Sousse"
            result="Sousse"
            des="Contribution à la création d'un projet social et culturel visant à promouvoir l'engagement étudiant et les initiatives communautaires."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
