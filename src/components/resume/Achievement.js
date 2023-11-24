import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-4xl font-bold">VOLUNTEER EXPERIENCE</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="JPO"
            subTitle="Polytechnic Sousse "
            result="tunis"
            des="Participation in the organization of the IT night Participation
            to the organization of the JPO (EPS)."
          />
          <ResumeCard
            title="IA event"
            subTitle="Polytechnic Sousse "
            result="tunis"
            des="Participation in the OpenIA 2nd edition event."
          />
          <ResumeCard
            title="IT Night event."
            subTitle="Polytechnic Sousse ."
            result="tunis"
            des="Participation in the IT Night event."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-4xl font-bold">VOLUNTEER EXPERIENCE</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Reyada."
            subTitle="Polytechnic Sousse."
            result="tunis"
            des="Participation in the Reyada event"
          />
          <ResumeCard
            title="polytechnic clubs."
            subTitle="Polytechnic Sousse."
            result="tunis"
            des="Number of Microsoft polytechnic clubs in Sousse"
          />
          <ResumeCard
            title="PSC."
            subTitle="Polytechnic Sousse."
            result="tunis"
            des="creation of a social cultural project (PSC)"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;