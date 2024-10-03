import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Title from "./Title";

const projectData = [
    {
        name: "DevZenith",
        techUsed: ["TS", "Next.js", "Tailwind", "Supabase", "Prisma", "Postgres"],
        thumbnail: "https://anas-nadkar.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDevzenith.3735e221.png&w=640&q=70",
        liveLink: "https://dev-zenith-v2.vercel.app/",
        githubUrl: "https://github.com/anasnadkar45/devZenith-v2/",
        description: "DevZenith is a collaborative platform where developers connect, share resources, and work on projects together.",
        date: "2024.6",
    },
    {
        name: "DigiMarket",
        techUsed: ["TS", "Next.js", "React", "Tailwind", "Stripe", "StripeConnect"],
        thumbnail: "https://anas-nadkar.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDigimarket.fbdb9c37.png&w=640&q=70",
        liveLink: "https://digi-market-gamma.vercel.app/",
        githubUrl: "https://github.com/anasnadkar45/digital-market-place/",
        description: "DigiMarket stands out as the premier marketplace for all things related to tailwindcss, offering an unparalleled platform for both sellers and buyers alike.",
        date: "2024.5",
    },
    {
        name: "ProjectsHub",
        techUsed: ["TS", "Next.js", "React", "Tailwind", "GitHub", "OpenAI"],
        thumbnail: "https://via.placeholder.com/150",
        liveLink: "https://projectshub-two.vercel.app/",
        githubUrl: "https://github.com/anasnadkar45/projectshub1/",
        description: "ProjectsHub is a platform designed to connect open-source contributors with trending Projects. It facilitates collaboration, enables mentorship, and streamlines the contribution process.",
        date: "2024.7",
    },
];


export default function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCardClick = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div className="flex flex-col items-center gap-4 px-4 pt-16">
            <div className='flex justify-center mb-6'>
                <Title>Projects</Title>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {projectData.map((project) => (
                    <ProjectCard
                        key={project.name}
                        project={project}
                        onClick={() => handleCardClick(project)}
                    />
                ))}
            </div>

            {isModalOpen && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
        </div>
    );
}

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            className="transform-gpu overflow-hidden rounded-xl border hover:border-[#1AD46F] bg-[#141414] p-4 text-white shadow-lg transition-all hover:cursor-pointer"
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.05 }}
        >
            <img
                src={project.thumbnail}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="text-xl font-bold text-[#FFEE00]">{project.name}</div>
            <div className="text-sm text-gray-400 mt-2 mb-2">{project.date}</div>
            <div className="flex flex-wrap gap-2 mt-2">
                {project.techUsed.map((tech) => (
                    <span
                        key={tech}
                        className="px-4 py-1 bg-black border text-gray-400 border-[#1AD46F] rounded-md text-xs"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

const ProjectModal = ({ project, onClose }) => {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="w-full max-w-lg p-8 bg-[#191919] border border-[#1AD46F] text-white rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-[#FFEE00]">{project.name}</h2>
                    <button onClick={onClose} className="text-[#1AD46F] text-4xl">
                        &times;
                    </button>
                </div>
                <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-60 object-cover rounded-md mb-4"
                />
                <p className="mb-4 text-gray-400">{project.description}</p>
                <div className="flex space-x-4">
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#FFEE00] rounded-full text-black font-bold hover:bg-[#ffdd00]"
                    >
                        <ExternalLinkIcon className="w-5 h-5" />
                        Live Demo
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#1f1f1f] rounded-full text-white border border-gray-600 hover:bg-gray-700"
                    >
                        <GithubIcon className="w-5 h-5" />
                        GitHub Repo
                    </a>
                </div>
            </div>
        </motion.div>
    );
};