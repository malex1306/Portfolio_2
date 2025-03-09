"use client"
import { motion } from "framer-motion"
import React, { useRef } from "react"
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaCuttlefish, FaNpm, FaCube, FaDatabase, FaLinux, FaPaintBrush } from "react-icons/fa";
import { MdArrowDownward } from "react-icons/md"; // Importiere die Icons

export default function DragConstraints() {
    const constraintsRef = useRef(null);

    return (
        <div ref={constraintsRef} className="w-full h-full relative flex items-center justify-center overflow-hidden">
            <div className="absolute top-0 left-60 space-x-2">
                <p style={{ fontFamily: 'Zain, sans-serif' }}>Drag me</p>
                <motion.span
                    className="text-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}

                >
                    <MdArrowDownward />
                </motion.span>
            </div>
            <h1 className="absolute top-0 left-0 text-2xl font-bold text-[#240046] mb-4"
                style={{ fontFamily: 'Anton SC, sans-serif' }}
            >
                TECHSTACK
            </h1>

            {/* Grid-Container */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 col-span-1 sm:col-span-3 row-span-4 sm:col-start-1 sm:row-start-5  p-4  ">

                {/* React */}
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.6}
                    dragMomentum={false}
                    className="w-24 h-12 bg-[#240046] rounded-lg flex items-center justify-center text-white border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] font-bold"
                >
                    <FaReact className="mr-2 text-blue-300 text-2xl" /> {/* Icon */}
                    React
                </motion.div>

                {/* HTML */}
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.6}
                    dragMomentum={false}
                    className="w-24 h-12 bg-[#240046] rounded-lg flex items-center justify-center text-white border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] font-bold"
                >
                    <FaHtml5 className="mr-2 text-orange-600 text-2xl" /> {/* Icon */}
                    HTML
                </motion.div>

                {/* CSS */}
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.6}
                    dragMomentum={false}
                    className="w-24 h-12 bg-[#240046] rounded-lg flex items-center justify-center text-white border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] font-bold"
                >
                    <FaCss3Alt className="mr-2 text-blue-800 text-2xl" /> {/* Icon */}
                    CSS
                </motion.div>

                {/* JavaScript */}
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.6}
                    dragMomentum={false}
                    className="w-30 h-12 bg-[#240046] rounded-lg flex items-center justify-center text-white border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] font-bold"
                >
                    <FaJs className="mr-2 text-yellow-300 text-2xl" /> {/* Icon */}
                    Javascript
                </motion.div>

                {/* Node.js */}
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.6}
                    dragMomentum={false}
                    className="w-32 h-12 bg-[#240046] rounded-lg flex items-center justify-center text-white border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] font-bold"
                >
                    <FaNodeJs className="mr-2 text-green-600 text-2xl" /> {/* Icon */}
                    Nodejs
                </motion.div>

                {/* C# */}
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.6}
                    dragMomentum={false}
                    className="w-26 h-12 bg-[#240046] rounded-lg flex items-center justify-center text-white border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] font-bold"
                >
                    <FaCuttlefish className="mr-2 text-purple-500 text-2xl" /> {/* Icon */}
                    C#
                </motion.div>

                {/* npm */}
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.6}
                    dragMomentum={false}
                    className="w-24 h-12 bg-[#240046] rounded-lg flex items-center justify-center text-white border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] font-bold"
                >
                    <FaNpm className="mr-2 text-red-500 text-3xl" /> {/* Icon */}
                    npm
                </motion.div>

                {/* Framer Motion */}
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.6}
                    dragMomentum={false}
                    className="w-38 h-12 bg-[#240046] rounded-lg flex items-center justify-center text-white border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] font-bold"
                >
                    <FaCube className="mr-2 text-blue-100 text-2xl" /> {/* Icon */}
                    Framermotion
                </motion.div>

                {/* SQL */}
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.6}
                    dragMomentum={false}
                    className="w-24 h-12 bg-[#240046] rounded-lg flex items-center justify-center text-white border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] font-bold"
                >
                    <FaDatabase className="mr-2 text-gray-600 text-2xl" /> {/* Icon */}
                    SQL
                </motion.div>

                {/* Linux */}
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.6}
                    dragMomentum={false}
                    className="w-24 h-12 bg-[#240046] rounded-lg flex items-center justify-center text-white border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] font-bold"
                >
                    <FaLinux className="mr-2 text-black text-2xl" /> {/* Icon */}
                    Linux
                </motion.div>

                {/* Procreate */}
                <motion.div
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.6}
                    dragMomentum={false}
                    className="w-32 h-12 bg-[#240046] rounded-lg flex items-center justify-center text-white border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] font-bold"
                >
                    <FaPaintBrush className="mr-2 text-pink-600 text-2xl" /> {/* Icon */}
                    Procreate
                </motion.div>

            </div>
        </div>
    );
}
