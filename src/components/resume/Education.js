import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education Section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Computer Engineering Degree"
            subTitle="École Polytechnique Sousse (2021 - 2024)"
            result="Very Good"
            des="Specialization in Software Engineering with modules including Algorithms in C, Object-Oriented Programming (Java/C++), and Network Design (CCNA)."
          />
          <ResumeCard
            title="Integrated Preparatory Cycle"
            subTitle="École Polytechnique Sousse (2019 - 2021)"
            result="Excellent"
            des="Completed foundational studies in advanced mathematics, physics, and computer science to access the engineering cycle."
          />
          <ResumeCard
            title="Baccalaureate in Technical Sciences"
            subTitle="Bekalta Secondary School (2014 - 2019)"
            result="Excellent"
            des="Scientific and technical high school diploma with focus on engineering principles, mechanics, and computing basics."
          />
        </div>
      </div>

      {/* Experience Section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="End-of-Studies Internship"
            subTitle="ALBARAKA – Poultry Company (Feb 2024 - Jun 2024)"
            result="Sousse"
            des="Designed and developed a complete web platform for poultry farm management: tracking growth, monitoring stock, and optimizing resources."
          />
          <ResumeCard
            title="Engineering Internship"
            subTitle="Com & DEV (Jul 2023 - Sep 2023)"
            result="Tunis"
            des="Created and deployed a web-based management solution using React.js and Ruby on Rails, enhancing business operations."
          />
          <ResumeCard
            title="Initiation Internship"
            subTitle="Designed & Dusted (Jul 2022 - Sep 2022)"
            result="Tunis"
            des="Built a medication purchase web application using React.js, Express.js, and MySQL, focused on usability and secure transactions."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
