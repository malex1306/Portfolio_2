"use client"
import { motion } from "framer-motion"
import { useRef } from "react"

export default function DragConstraints() {
    const constraintsRef = useRef(null)

    return (
        <div ref={constraintsRef} className="w-full h-full relative flex items-center justify-center overflow-hidden">
            <h1 className="absolute top-0 left-0 text-2xl font-bold text-[#240046] mb-4">
                TechStack
            </h1>

            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.6}
                dragMomentum={false}
                className="w-24 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold absolute top-16 left-4"
            >
                React
            </motion.div>

            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.6}
                dragMomentum={false}
                className="w-24 h-12 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold absolute top-16 left-36"
            >
                HTML
            </motion.div>

            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.6}
                dragMomentum={false}
                className="w-24 h-12 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold absolute top-36 left-4"
            >
                C#
            </motion.div>

            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.6}
                dragMomentum={false}
                className="w-26 h-12 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold absolute top-36 left-36"
            >
                CSS
            </motion.div>

            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.6}
                dragMomentum={false}
                className="w-24 h-12 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold absolute top-56 left-4"
            >
                Javascript
            </motion.div>

            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.6}
                dragMomentum={false}
                className="w-32 h-12 bg-pink-500 rounded-lg flex items-center justify-center text-white font-bold absolute top-56 left-36"
            >
                Framermotion
            </motion.div>
        </div>
    )
}
