import { motion } from "framer-motion";
import { Github, Linkedin, Briefcase } from "lucide-react";

const socialLinks = [
    { id: 1, name: "GitHub", url: "https://github.com/malex1306", icon: <Github className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> },
    { id: 2, name: "LinkedIn", url: "https://www.linkedin.com/in/marcel-alexandre-67165131a", icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> },
    { id: 3, name: "Xing", url: "https://www.xing.com/profile/Marcel_Alexandre061965", icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" /> },
];

export default function SocialLinks() {
    return (
        <motion.div
            className="flex justify-center space-x-1 mt-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {socialLinks.map(link => (
                <motion.a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" p-3 rounded-full bg-[#240046] text-white hover:text-blue-400 transition-all"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {link.icon}
                </motion.a>
            ))}
        </motion.div>
    );
}
