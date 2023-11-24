import React from "react";
import {motion} from "framer-motion"
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
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Com & DEV"
            subTitle="Com & DEV - (2022)"
            result="sousse"
            des="Development of a management website:
            A management website project involves the creation and
            development of an online platform aimed at organizing,
            supervise and manage various activities or data."
          />
         
         <ResumeCard
            title="The intern may Designed & Dusted"
            subTitle="Designed & Dusted - (2022)"
            result="sousse"
            des="The development of a medicine purchasing application
            involves the creation of a mobile or web platform allowing
            users to purchase medicines securely and
            practical."
          />
         
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;