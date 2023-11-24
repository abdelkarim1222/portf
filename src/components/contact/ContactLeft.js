import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
    return (
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
                className="w-full h-64 object-cover rounded-lg mb-2"
                src={contactImg}
                alt="contactImg"
            />
            <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-white">Ezzar Abdelkarim</h3>
                <p className="text-lg font-normal text-gray-400">
                    MERN Stack Developer
                </p>
                <p className="text-base text-gray-400 tracking-wide">
                    
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Phone: <span className="text-lightText">+216 778808</span>
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Email1: <span className="text-lightText">ezzar30@gmail.com</span>

                </p>
                <p>Email2: <span className="text-lightText">abdelkarim.ezzar@polytechnicien.tn</span></p>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
                <div className="flex gap-4">
                    <span className="bannerIcon">
                        <a href="https://www.facebook.com/ezzar.abdlekrim.5" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </a>
                    </span>
                    <span className="bannerIcon">
                        <a href="https://github.com/abdelkarim1222" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>

                    </span>
                    <span className="bannerIcon">

                        <a href="https://www.linkedin.com/in/ezzar-abdlekrim/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ContactLeft