import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaCuttlefish, FaNpm, FaCube, FaDatabase, FaLinux, FaPaintBrush } from 'react-icons/fa';

export default function DragConstraints() {
    const constraintsRef = useRef(null);

    return (
        <div ref={constraintsRef} className="w-full h-full relative flex flex-wrap items-center justify-center overflow-hidden">

        <h1 className="absolute top-0 left-0 text-2xl font-bold text-[#240046] mb-4">
                TechStack
            </h1>

            {/* React */}
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.6}
                dragMomentum={false}
                className="w-32 h-16 bg-blue-300 rounded-lg flex items-center justify-center text-[#240046] border-2 border-[#240046] font-bold absolute top-16 left-8"
            >
                <FaReact className="mr-2 text-[#240046] text-2xl" />
                React
            </motion.div>

            {/* HTML */}
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.6}
                dragMomentum={false}
                className="w-32 h-16 bg-orange-500 rounded-lg flex items-center justify-center text-[#240046] border-2 border-[#240046] font-bold absolute top-40 left-12"
            >
                <FaHtml5 className="mr-2 text-[#240046] text-2xl" />
                HTML
            </motion.div>

            {/* CSS */}
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.6}
                dragMomentum={false}
                className="w-32 h-16 bg-purple-500 rounded-lg flex items-center justify-center text-[#240046] border-2 border-[#240046] font-bold absolute top-64 left-8"
            >
                <FaCss3Alt className="mr-2 text-[#240046] text-2xl" />
                CSS
            </motion.div>

            {/* JavaScript */}
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.6}
                dragMomentum={false}
                className="w-36 h-16 bg-yellow-400 rounded-lg flex items-center justify-center text-[#240046] border-2 border-[#240046] font-bold absolute top-88 left-12"
            >
                <FaJs className="mr-2 text-[#240046] text-2xl" />
                JavaScript
            </motion.div>

            {/* Node.js */}
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.6}
                dragMomentum={false}
                className="w-36 h-16 bg-green-600 rounded-lg flex items-center justify-center text-[#240046] border-2 border-[#240046] font-bold absolute top-112 left-16"
            >
                <FaNodeJs className="mr-2 text-[#240046] text-2xl" />
                Node.js
            </motion.div>

            {/* C# */}
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.6}
                dragMomentum={false}
                className="w-32 h-16 bg-blue-500 rounded-lg flex items-center justify-center text-[#240046] border-2 border-[#240046] font-bold absolute top-136 left-12"
            >
                <FaCuttlefish className="mr-2 text-[#240046] text-2xl" />
                C#
            </motion.div>

            {/* npm */}
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.6}
                dragMomentum={false}
                className="w-32 h-16 bg-orange-700 rounded-lg flex items-center justify-center text-[#240046] border-2 border-[#240046] font-bold absolute top-160 left-8"
            >
                <FaNpm className="mr-2 text-[#240046] text-3xl" />
                npm
            </motion.div>

            {/* Framer Motion */}
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.6}
                dragMomentum={false}
                className="w-40 h-16 bg-pink-500 rounded-lg flex items-center justify-center text-[#240046] border-2 border-[#240046] font-bold absolute top-160 left-32"
            >
                <FaCube className="mr-2 text-[#240046] text-2xl" />
                FramerMotion
            </motion.div>

            {/* SQL */}
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.6}
                dragMomentum={false}
                className="w-32 h-16 bg-gray-600 rounded-lg flex items-center justify-center text-[#240046] border-2 border-[#240046] font-bold absolute top-184 left-12"
            >
                <FaDatabase className="mr-2 text-[#240046] text-2xl" />
                SQL
            </motion.div>

            {/* Linux */}
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.6}
                dragMomentum={false}
                className="w-32 h-16 bg-gray-300 rounded-lg flex items-center justify-center text-[#240046] border-2 border-[#240046] font-bold absolute top-184 left-32"
            >
                <FaLinux className="mr-2 text-[#240046] text-2xl" />
                Linux
            </motion.div>

            {/* Procreate */}
            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.6}
                dragMomentum={false}
                className="w-36 h-16 bg-pink-300 rounded-lg flex items-center justify-center text-[#240046] border-2 border-[#240046] font-bold absolute top-208 left-16"
            >
                <FaPaintBrush className="mr-2 text-[#240046] text-2xl" />
                Procreate
            </motion.div>
        </div>
    );
}
