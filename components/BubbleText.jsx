import { motion } from "framer-motion";

export default function BubbleText() {
    const lines = [
        "As they say, find your",
        "passion and make",
        "it your",
        "job. Well, I found it!"
    ];

    return (
        <h2 className="text-left text-2xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-4xl font-thin text-indigo-700 leading-snug">
            {lines.map((line, lineIdx) => (
                <div key={lineIdx} className="inline-block">
                    {line.split(/(\s)/).map((char, charIdx) => (
                        char === " " ? (
                            <span key={`${lineIdx}-${charIdx}`}>&nbsp;</span>
                        ) : (
                            <motion.span
                                key={`${lineIdx}-${charIdx}`}
                                className="inline-block"
                                whileHover={{ fontWeight: 700, color: "rgb(238, 242, 255)" }}
                                transition={{ duration: 0.3 }}
                            >
                                {char}
                            </motion.span>
                        )
                    ))}
                    <br />
                </div>
            ))}
        </h2>
    );
}
