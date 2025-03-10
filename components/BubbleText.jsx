import { motion } from "framer-motion";

export default function BubbleText() {
    const lines = [
        "AS THEY SAY, FIND YOUR ",
        "PASSION AND MAKE IT ",
        "YOUR JOB. ",
        "WELL, I FOUND IT!"
    ];

    return (
        <h2 className="text-left text-5xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#240046] leading-snug"
            style={{ fontFamily: 'Anton SC, sans-serif' }}>
            {lines.map((line, lineIdx) => (
                <div key={lineIdx} className="inline-block">
                    {line.split(/(\s)/).map((char, charIdx) => (
                        char === " " ? (
                            <span key={`${lineIdx}-${charIdx}`}>&nbsp;</span>
                        ) : (
                            <motion.span
                                key={`${lineIdx}-${charIdx}`}
                                className="inline-block"
                                whileHover={{ fontWeight: 700, color: "rgb(236, 72, 153)" }}
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
