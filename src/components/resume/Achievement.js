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
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-4xl font-bold">Event Participation</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Open Day (JPO)"
            subTitle="École Polytechnique Sousse"
            result="Sousse"
            des="Active participation in organizing the university’s Open Day and IT Night event, showcasing academic and student projects."
          />
          <ResumeCard
            title="OpenIA - 2nd Edition"
            subTitle="École Polytechnique Sousse"
            result="Sousse"
            des="Attended and contributed to the OpenIA event focused on artificial intelligence trends and innovations."
          />
          <ResumeCard
            title="Night of Computing"
            subTitle="École Polytechnique Sousse"
            result="Sousse"
            des="Helped organize this major tech event aimed at promoting student projects and digital creativity."
          />
        </div>
      </div>

      {/* Column 2 - Clubs & Social Projects */}
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2023</p>
          <h2 className="text-4xl font-bold">Club & Social Involvement</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Reyada Event"
            subTitle="École Polytechnique Sousse"
            result="Sousse"
            des="Participated in this entrepreneurial and innovation-focused event encouraging leadership and project pitching."
          />
          <ResumeCard
            title="Microsoft Club"
            subTitle="Polytechnique Sousse"
            result="Sousse"
            des="Member of the Microsoft Club, contributing to technology workshops and student tech meetups."
          />
          <ResumeCard
            title="PSC - Social Cultural Project"
            subTitle="École Polytechnique Sousse"
            result="Sousse"
            des="Contributed to the creation of a social and cultural initiative promoting student engagement and community outreach."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
