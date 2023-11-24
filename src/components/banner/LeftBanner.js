import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Full Stack Developer.", "UI Designer."],
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
                    engineering student at the Polytechnic School of Sousse,
                    IT specialty Engineer with a specialty in Artificial Intelligence and Big Data,
                    I am looking for an internship. With a strong academic background and passionate about innovation,
                    I aim to contribute to avant-garde projects and projects, exploit the
                    emerging technologies to solve real-world challenges.
                </p>
            </div>
            {/* Media */}
            <Media />
        </div>
    );
}

export default LeftBanner