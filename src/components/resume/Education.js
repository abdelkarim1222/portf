import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2014 - Now</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" software engineer"
            subTitle="Polytechnic Sousse  (2021 - Now)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Integrated preparatory cycle"
            subTitle="Polytechnic Sousse (2019 - 2021)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Bachelor of Technical Sciences"
            subTitle="Bekalta Secondary School (2014 - 2018)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         
          <ResumeCard
            title="The intern may Com & DEV"
            subTitle="Com & DEV - ( 2023)"
            result="tunis"
            des="Development of a management website:
            A management website project involves the creation and
            development of an online platform aimed at organizing,
            supervise and manage various activities or data."
          />
          <ResumeCard
            title="The intern may Designed & Dusted"
            subTitle="Designed & Dusted - (2022)"
            result="tunis"
            des="The development of a medicine purchasing application
            involves the creation of a mobile or web platform allowing
            users to purchase medicines securely and
            practical."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education