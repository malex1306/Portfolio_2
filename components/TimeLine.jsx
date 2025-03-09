import React from 'react';
import { motion } from 'framer-motion';


const Timeline = () => {
    const timelineData = [
        { year: '2011 - 2014', event: 'Work', description: 'Bundeswehr.' },
        { year: '2014 - 2023', event: 'Tattooartist', description: 'Worked as a self-employed tattoo artist.' },
        { year: '2024 - 2026', event: 'Started a retraining program as an application developer.', description: 'Retraining as an application developer to learn programming and software development.' },
    ];

    return (
        <div className="w-full flex flex-col items-center space-y-8">
            <motion.div
                className="text-center text-2xl font-bold text-[#240046]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 style={{ fontFamily: 'Anton SC, sans-serif' }}>Timeline</h1>
            </motion.div>
            <div className="relative w-full max-w-[20rem] sm:max-w-[30rem] mx-auto">
                <div className="space-y-6">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-start justify-start space-x-4 relative"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="w-4 h-4 bg-white rounded-full border-3 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
                            <div className="flex flex-col ">
                                <div className="text-xl sm:text-xl xl:text-3xl text-[#240046]" style={{ fontFamily: 'Anton SC, sans-serif' }}>{item.year}</div>
                                <div className="text-lg sm:text-xl xl:text-3xl text font-medium text-[#240046]" style={{ fontFamily: 'Anton SC, sans-serif' }}>{item.event}</div>
                                <div className="text-sm sm:text-xl xl:text-3xl text text-[#240046]" style={{ fontFamily: 'Zain, sans-serif' }}>{item.description}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
