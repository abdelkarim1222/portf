import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Left Column - Backend & Languages */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Technical Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Development Skills</h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
          <SkillBar name="Node.js & Express.js" level="80%" />
          <SkillBar name="Spring Boot" level="60%" />
          <SkillBar name="J2EE" level="50%" />
          <SkillBar name="Symfony" level="60%" />
          <SkillBar name="Python" level="70%" />
          <SkillBar name="Java" level="70%" />
        </div>
      </div>

      {/* Right Column - Frontend & Tools */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Frontend & Tools
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">UI & Technologies</h2>
        </div>
        <div className="flex flex-col gap-6">
          <SkillBar name="React.js" level="90%" />
          <SkillBar name="Flutter" level="50%" />
          <SkillBar name="HTML5 & CSS3" level="95%" />
          <SkillBar name="JavaScript / TypeScript" level="75%" />
          <SkillBar name="Android Studio" level="40%" />
          <SkillBar name="Figma (UI Prototyping)" level="70%" />
        </div>
      </div>
    </motion.div>
  );
};

// ✅ Reusable skill bar component
const SkillBar = ({ name, level }: { name: string; level: string }) => (
  <div className="overflow-x-hidden">
    <p className="text-sm uppercase font-medium">{name}</p>
    <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
      <motion.span
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        style={{ width: level }}
      >
        <span className="absolute -top-7 right-0">{level}</span>
      </motion.span>
    </span>
  </div>
);

export default Skills;
