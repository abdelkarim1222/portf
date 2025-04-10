import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
          <h2 className="text-4xl font-bold">Professional Experience</h2>
        </div>

        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full-Stack Developer"
            subTitle="Freelance Project – Rental Management Platform (Sep 2024 - Jan 2025)"
            result="Remote"
            des={`Developed a platform for managing room and seasonal accommodation rentals:\n
• Online booking system with availability tracking and request management\n
• Admin dashboard for tenant/payment/occupancy control\n
• Secure payments: ClickToPay, D17, E-Dinar\n
• Automated invoices, responsive UI, and real-time notifications\n
• Technologies: Node.js, Express.js, React, MongoDB, JWT, ClickToPay`}
          />

          <ResumeCard
            title="Full-Stack Developer"
            subTitle="Freelance Project – E-Commerce Platform (Jan 2025 - Apr 2025)"
            result="Remote"
            des={`Built a full-featured e-commerce app with:\n
• Role-based access (admin, merchant, customer)\n
• Secure order management, stock sync, and dashboards\n
• REST APIs, secure payment integration, XSS/SQL protection\n
• Technologies: Node.js, Express.js, React, MongoDB, Mongoose, JWT, ClickToPay`}
          />

          <ResumeCard
            title="Professional Internship"
            subTitle="Com-And-Dev – (Aug 2024 - Dec 2024)"
            result="Tunis"
            des={`Internship in the web development department:\n
• Contributed to Ruby on Rails applications\n
• Focused on backend development and Agile methodologies\n
• Gained real-world experience on production projects`}
          />

          <ResumeCard
            title="Final Year Internship"
            subTitle="ALBARAKA – (Feb 2024 - Jun 2024)"
            result="Sousse"
            des={`Designed a web management application for poultry farming:\n
• Real-time poultry growth and stock monitoring\n
• RESTful APIs, recommendation engine, Figma-based UI\n
• Technologies: React.js, Node.js, Express.js, MongoDB, TypeScript, Material UI`}
          />

          <ResumeCard
            title="Engineering Internship"
            subTitle="Com & DEV – (Jul 2023 - Sep 2023)"
            result="Tunis"
            des={`Built and deployed a full-stack business management system:\n
• Technologies: React.js, Ruby on Rails, MySQL`}
          />

          <ResumeCard
            title="Initiation Internship"
            subTitle="Designed & Dusted – (Jul 2022 - Sep 2022)"
            result="Tunis"
            des={`Created a medication purchase web application:\n
• Technologies: React.js, Express.js, MySQL`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
