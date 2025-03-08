import React from 'react';
import { motion } from 'framer-motion';
import DragConstraints from "./Techstack.jsx";
import BubbleText from "./BubbleText.jsx";

export default function BentoGrind() {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-[#7209b7] via-[#560bad] via-[#480ca8] via-[#3a0ca3] to-[#3f37c9] p-4 sm:p-[0.5cm] relative overflow-hidden">
            <div className="relative grid grid-cols-1 sm:grid-cols-7 grid-rows-8 gap-3 w-full h-full">
                <motion.div
                    className="col-span-1 sm:col-span-7 bg-white/20  rounded-xl p-4 border-3 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.8)" }}
                >
                    <motion.div
                        className="text-center text-3xl font-semibold text-white"
                        initial={{ opacity: 0, x: -1000 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        Marcel Alexandre
                    </motion.div>
                    <motion.div
                        className="text-center text-xl font-light text-white mt-2"
                        initial={{ opacity: 0, x: 400 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        Frontend/Creative Developer
                    </motion.div>
                </motion.div>


                <motion.div
                    className="col-span-1 sm:col-span-3 row-span-3 sm:col-start-1 sm:row-start-2 bg-white/20 backdrop-blur-lg rounded-xl p-4 border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.8)" }}
                >
                    <div className="w-full h-full flex items-center justify-center">
                        <BubbleText />
                    </div>

                </motion.div>


                <motion.div
                    className="col-span-1 sm:col-span-2 row-span-3 sm:col-start-4 sm:row-start-2 bg-white/20 backdrop-blur-lg rounded-xl p-4 border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.8)" }}
                >
                    <div className="text-center text-white">Box 2</div>
                </motion.div>


                <motion.div
                    className="col-span-1 sm:col-span-3 row-span-4 sm:col-start-1 sm:row-start-5 bg-white/20  rounded-xl p-4 border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.8)" }}
                >
                    <div className="w-full h-full flex items-center justify-center">
                        <DragConstraints />
                    </div>
                </motion.div>


                <motion.div
                    className="col-span-1 sm:col-span-2 row-span-6 sm:col-start-6 sm:row-start-2 bg-white/20 backdrop-blur-lg rounded-xl p-4 border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.8)" }}
                >
                    <div className="text-center text-white">Box 4</div>
                </motion.div>


                <motion.div
                    className="col-span-1 sm:col-span-2 row-span-3 sm:col-start-4 sm:row-start-5 bg-white/20 backdrop-blur-lg rounded-xl p-4 border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.8)" }}
                >
                    <div className="text-center text-white">Box 5</div>
                </motion.div>


                <motion.div
                    className="col-span-1 sm:col-span-4 row-span-1 sm:col-start-4 sm:row-start-8 bg-white/20 backdrop-blur-lg rounded-xl p-4 border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.8)" }}
                >
                    <div className="text-center text-white">Box 6</div>
                </motion.div>
            </div>
        </div>
    );
}
