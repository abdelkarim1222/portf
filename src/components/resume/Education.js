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
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Engineering Degree in Computer Science"
            subTitle="École Polytechnique Sousse (2021 - 2024)"
            result="Very Good"
            des="Specialization in Software Engineering. Key modules: Algorithms in C, OOP in Java/C++, Network Design (CCNA 1 & 2)."
          />
          <ResumeCard
            title="Integrated Preparatory Program"
            subTitle="École Polytechnique Sousse (2019 - 2021)"
            result="Excellent"
            des="Foundation in advanced mathematics, physics, and computer science to prepare for the engineering cycle."
          />
          <ResumeCard
            title="Baccalaureate in Technical Sciences"
            subTitle="Bekalta Secondary School (2014 - 2019)"
            result="Excellent"
            des="Technical high school diploma focused on mechanics, engineering principles, and computing basics."
          />
        </div>
      </div>

      {/* Professional Experience Section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
          <ResumeCard
            title="Full-Stack Developer"
            subTitle="Freelance Project – Rental Management App (Sep 2024 – Jan 2025)"
            result="Remote"
            des="Developed a platform for managing room and seasonal accommodation rentals:
            • Implemented online booking with availability tracking and request validation.
            • Built an admin dashboard for tenant/payment/statistics management.
            • Integrated secure local payment options: ClickToPay, D17, E-Dinar.
            • Automated contracts, invoices, and notifications via email/SMS.
            • Ensured performance, data security, and feature evolution.
            Technologies: Node.js, Express.js, MongoDB, Mongoose, JWT, React, ClickToPay, D17"
          />

          <ResumeCard
            title="Full-Stack Developer"
            subTitle="Freelance Project – E-Commerce Platform (Jan 2025 – Apr 2025)"
            result="Remote"
            des="Built a complete online selling solution for merchants:
            • Authentication with role-based access (customer, merchant, admin).
            • Order tracking, status updates, and stock sync.
            • Secure payments with ClickToPay, D17, E-Dinar.
            • RESTful APIs and responsive React interfaces.
            • Merchant dashboard with real-time sales analytics.
            • Input validation and robust security against SQL/XSS.
            Technologies: Node.js, Express.js, MongoDB, Mongoose, JWT, React"
          />

          <ResumeCard
            title="Internship – Web Development"
            subTitle="Com-And-Dev (Aug 2024 – Dec 2024)"
            result="Tunis"
            des="Participated in developing Ruby on Rails web applications in a real business context:
            • Strengthened backend development and Agile collaboration.
            • Certified by Anouar Mansouri, Com-And-Dev Manager.
            Technologies: Ruby on Rails"
          />

          <ResumeCard
            title="Final Year Internship"
            subTitle="ALBARAKA Poultry Company (Feb 2024 – Jun 2024)"
            result="Sousse"
            des="Created a poultry farm management system:
            • Real-time tracking of poultry growth and stock.
            • REST APIs for stock, building, and batch management.
            • Figma-based UI, recommendation system with custom APIs.
            Technologies: React.js, Node.js, Express.js, MongoDB, TypeScript, Material UI, Git, Postman"
          />

          <ResumeCard
            title="Engineering Internship"
            subTitle="Com&DEV (Jul 2023 – Sep 2023)"
            result="Tunis"
            des="Designed and deployed a web-based business management system.
            Technologies: React.js, Ruby on Rails, MySQL"
          />

          <ResumeCard
            title="Initiation Internship"
            subTitle="Designed & Dusted (Jul 2022 – Sep 2022)"
            result="Tunis"
            des="Developed a medication purchasing web app.
            Technologies: React.js, Node.js, Express.js, MySQL"
          />
          
        </div>
      </div>

    </motion.div>
  );
};

export default Education;
