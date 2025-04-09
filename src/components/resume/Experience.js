import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-4xl font-bold">Professional Experience</h2>
        </div>

        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="End-of-Studies Internship"
            subTitle="ALBARAKA - (Feb 2024 - Jun 2024)"
            result="Sousse"
            des="Designed and developed a web-based management application for poultry farming. The platform enables tracking poultry growth, managing stock, and optimizing resources to enhance productivity."
          />

          <ResumeCard
            title="Engineering Internship"
            subTitle="Com & DEV - (Jul 2023 - Sep 2023)"
            result="Sousse"
            des="Developed and deployed a web-based management system using React.js and Ruby on Rails. The project focused on organizing and managing business operations efficiently."
          />

          <ResumeCard
            title="Initiation Internship"
            subTitle="Designed & Dusted - (Jul 2022 - Sep 2022)"
            result="Sousse"
            des="Created a medicine purchasing web application using React.js, Express.js, and MySQL. The solution offers a secure and user-friendly way to browse and order medication online."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
