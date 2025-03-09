import React from 'react';
import { motion } from 'framer-motion';
import DragConstraints from "./Techstack.jsx";
import BubbleText from "./BubbleText.jsx";
import SpeechAnimation from "./speechAnimation.jsx";
import SocialLinks from "./SocialLinks.jsx";
import Bild from "../src/assets/Me.png"
import Logo from "../src/assets/Logo.png"
import FlipText from "./FlipText.jsx";
import ContactMe from "./Contact.jsx";
import Timeline from "./TimeLine.jsx";
import { MdArrowDownward } from 'react-icons/md';



export default function BentoGrind() {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-[#7209b7] via-[#560bad] via-[#480ca8] via-[#3a0ca3] to-[#3f37c9] p-4 sm:p-[0.5cm] relative overflow-hidden">
            <div className="relative grid grid-cols-1 sm:grid-cols-7 grid-rows-8 gap-3 w-full h-full">
                <motion.div
                    className="col-span-1 sm:col-span-7 bg-white/20 rounded-xl p-4 border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(168,85,247,0.8)" }}
                >
                    <FlipText />
                    <motion.div
                        className="text-center text-3xl font-semibold text-white"
                        initial={{ opacity: 0, x: -1000 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        <header className="flex items-center justify-between p-4 ">
                            <motion.div
                                className="w-16 sm:w-24 mt-[-27px]"
                                initial={{ opacity: 0, x: -200 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img src={Logo} alt="Logo" className="w-full h-auto" />
                            </motion.div>
                        </header>
                    </motion.div>
                    <motion.div
                        className="text-center text-xl font-light text-white mt-2"
                        initial={{ opacity: 0, x: 400 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    >

                    </motion.div>
                </motion.div>


                <motion.div
                    className="col-span-1 sm:col-span-3 row-span-3 sm:col-start-1 sm:row-start-2 bg-white/20 rounded-xl p-4 border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(168,85,247,0.8)" }}
                >
                    <div className="flex items-center space-x-2">
                        <p style={{ fontFamily: 'Zain, sans-serif' }}>Hover me</p>
                        <motion.span
                            className="text-2xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <MdArrowDownward />
                        </motion.span>
                    </div>
                    <div className="w-full h-full flex items-center justify-center -mt-7">
                        <BubbleText />
                    </div>
                    <div style={{ transform: 'translateY(-60px)' }}>
                        <SpeechAnimation />
                    </div>
                </motion.div>


                <motion.div
                    className="col-span-1 sm:col-span-2 row-span-2 sm:row-span-3 sm:col-start-4 sm:row-start-2
               bg-white/20  rounded-xl p-4 border-2 border-purple-500
               shadow-[0_0_10px_rgba(168,85,247,0.8)] flex flex-col items-center sm:items-start
               gap-2 w-full"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(168,85,247,0.8)" }}
                >
                    <img
                        src={Bild}
                        alt="Mein Bild"
                        className="w-16 sm:w-24 h-auto object-contain rounded-lg mt-2"
                    />
                    <p className="text-sm sm:text-xl xl:text-2xl [#240046] text-center sm:text-left leading-tight mt-2"
                       style={{ fontFamily: 'Zain, sans-serif' }}>
                        Hi, my name is Marcel Alexandre, and I live in Dortmund. I'm retraining as an application developer. I love programming, learning new things, and building websites, UIs, and web apps.
                    </p>
                </motion.div>

                <motion.div
                    className="col-span-1 sm:col-span-3 row-span-4 sm:col-start-1 sm:row-start-5 bg-white/20  rounded-xl p-4 border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(168,85,247,0.8)" }}
                >
                    <div className="w-full h-full flex items-center justify-center">
                        <DragConstraints />
                    </div>
                </motion.div>

                <motion.div
                    className="col-span-1 sm:col-span-2 row-span-5 sm:col-start-6 sm:row-start-2 bg-white/20  rounded-xl p-4 border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] hidden sm:block"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(168,85,247,0.8)" }}
                >
                    <Timeline/>
                </motion.div>


                <motion.div
                    className="col-span-1 sm:col-span-2 row-span-4 sm:col-start-4 sm:row-start-5 bg-white/20 backdrop-blur-lg rounded-xl p-4 border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] hidden sm:block"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(168,85,247,0.8)" }}
                >


                </motion.div>


                <motion.div
                    className="col-span-1 sm:col-span-2 row-span-2 sm:col-start-6 sm:row-start-7 bg-white/20  rounded-xl p-4 border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(168,85,247,0.8)" }}
                >
                    <div className="w-full h-full flex flex-col items-center justify-center space-y-8  sm:justify-start sm:space-x-4">
                        <h1 className=" font-bold text-2xl text-[#240046] "style={{ fontFamily: 'Anton SC, sans-serif' }}>Get in touch</h1>
                        <SocialLinks />
                    </div>

                </motion.div>
            </div>
        </div>
    );
}
