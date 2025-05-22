import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaJava, FaPhp,
  FaHtml5, FaCss3Alt, FaAndroid, FaGithub, FaTerminal,
} from 'react-icons/fa';
import {
  SiTypescript, SiRuby, SiSpringboot, SiMysql, SiMongodb, SiFirebase,
  SiFigma, SiVisualstudiocode, SiPostman, SiAngular, SiVuedotjs,
  SiLaravel, SiOracle, SiElasticsearch, SiEclipseide, SiPowerbi,
  SiTalend, SiTrello, SiJavascript, SiCplusplus, SiC, SiUml,
  SiJirasoftware, SiAsana, SiReact
} from 'react-icons/si';

const icons = [
  { icon: <FaReact className="text-[#61DBFB]" />, label: 'React.js' },
  { icon: <SiReact className="text-[#61DBFB]" />, label: 'React Native' },
  { icon: <FaReact className="text-[#0081CB]" />, label: 'Material UI' },
  { icon: <SiTypescript className="text-[#3178C6]" />, label: 'TypeScript' },
  { icon: <SiJavascript className="text-[#F7DF1E]" />, label: 'JavaScript' },
  { icon: <FaNodeJs className="text-[#339933]" />, label: 'Node.js' },
  { icon: <SiRuby className="text-[#CC342D]" />, label: 'Ruby on Rails' },
  { icon: <SiSpringboot className="text-[#6DB33F]" />, label: 'Spring Boot' },
  { icon: <FaPhp className="text-[#8892BF]" />, label: 'PHP' },
  { icon: <SiLaravel className="text-[#FF2D20]" />, label: 'Laravel' },
  { icon: <FaPython className="text-[#3776AB]" />, label: 'Python' },
  { icon: <FaJava className="text-[#007396]" />, label: 'Java' },
  { icon: <SiC className="text-[#A8B9CC]" />, label: 'C' },
  { icon: <SiCplusplus className="text-[#00599C]" />, label: 'C++' },
  { icon: <FaHtml5 className="text-[#E34F26]" />, label: 'HTML5' },
  { icon: <FaCss3Alt className="text-[#1572B6]" />, label: 'CSS3' },
  { icon: <SiMysql className="text-[#00758F]" />, label: 'MySQL' },
  { icon: <SiMongodb className="text-[#47A248]" />, label: 'MongoDB' },
  { icon: <SiFirebase className="text-[#FFCA28]" />, label: 'Firebase' },
  { icon: <SiOracle className="text-[#F80000]" />, label: 'Oracle SQL' },
  { icon: <SiElasticsearch className="text-[#005571]" />, label: 'Elasticsearch' },
  { icon: <SiUml className="text-white" />, label: 'UML' },
  { icon: <FaGitAlt className="text-[#F05032]" />, label: 'Git' },
  { icon: <FaGithub className="text-white" />, label: 'GitHub' },
  { icon: <SiPostman className="text-[#FF6C37]" />, label: 'Postman' },
  { icon: <FaAndroid className="text-[#3DDC84]" />, label: 'Android Studio' },
  { icon: <FaTerminal className="text-[#F08000]" />, label: 'CodeBlocks' },
  { icon: <SiVisualstudiocode className="text-[#007ACC]" />, label: 'VS Code' },
  { icon: <SiEclipseide className="text-[#2C2255]" />, label: 'Eclipse' },
  { icon: <SiPowerbi className="text-[#F2C811]" />, label: 'Power BI' },
  { icon: <SiTalend className="text-[#0875C1]" />, label: 'Talend' },
  { icon: <SiTrello className="text-[#0079BF]" />, label: 'Trello' },
  { icon: <SiJirasoftware className="text-[#0052CC]" />, label: 'JIRA' },
  { icon: <SiAsana className="text-[#273347]" />, label: 'Asana' },
  { icon: <SiFigma className="text-[#F24E1E]" />, label: 'Figma' },
  { icon: <SiAngular className="text-[#DD0031]" />, label: 'Angular' },
  { icon: <SiVuedotjs className="text-[#42B883]" />, label: 'Vue.js' },
];

const MarqueeRow = ({ icons, reverse = false }) => (
  <div className="w-full mb-6">
    <motion.div
      className="flex gap-12 items-center whitespace-nowrap"
      animate={{ x: reverse ? ['-100%', '100%'] : ['100%', '-100%'] }}
      transition={{ repeat: Infinity, duration: 90, ease: 'linear' }}
      style={{ display: 'inline-flex', minWidth: '200%' }} // for smoother infinite loop
    >
      {[...icons, ...icons].map((item, index) => (
        <div
          key={index}
          className="text-6xl hover:scale-110 transition-transform duration-300 flex flex-col items-center min-w-[120px]"
        >
          {item.icon}
          <span className="text-sm mt-2 text-white text-center">{item.label}</span>
        </div>
      ))}
    </motion.div>
  </div>
);


const Skills = () => {
  return (
    <div className="w-full py-10 overflow-hidden">
      <div className="text-center mb-10">
        <p className="text-sm text-designColor tracking-[4px] uppercase">Technologies</p>
        <h2 className="text-3xl md:text-4xl font-bold">Skills & Tools</h2>
      </div>

      <MarqueeRow icons={icons} />
      <MarqueeRow icons={icons} reverse />
    </div>
  );
};

export default Skills;
