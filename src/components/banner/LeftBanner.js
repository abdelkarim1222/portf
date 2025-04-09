import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Software engineer","Full Stack Developer", "UI Designer"],
        loop: true,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
                <h1 className="text-6xl font-bold text-white">
                    Hi, I'm <span className="text-designColor capitalize">EZZAR Abdelkarim</span>
                </h1>
                <h2 className="text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                A passionate and motivated Software Engineer, recently graduated from École Polytechnique Sousse, Tunisia, with a strong foundation in full-stack development, data analysis, 
                and system design. I am skilled in modern technologies such as React.js, Node.js, Spring Boot, and Power BI.
                My academic and internship experiences include building web applications for stock, flock, and business management. 
                With a proactive mindset, I thrive in collaborative environments and continuously seek to expand my knowledge in emerging technologies. 
                Eager to contribute to innovative projects and deliver impactful digital solutions, I am ready to bring energy, adaptability, and a problem-solving approach to any challenge.
                </p>
            </div>
            
            <Media />
        </div>
    );
}

export default LeftBanner