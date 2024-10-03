import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLinkIcon, GithubIcon } from "lucide-react";
import Title from "./Title";

const projectData = [
    {
        name: "DevZenith",
        techUsed: ["Node.js", "Express", "PostgreSQL"],
        thumbnail: "https://anas-nadkar.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDevzenith.3735e221.png&w=640&q=70", // Replace with your image URL
        liveLink: "https://devzenith.com",
        githubUrl: "https://github.com/devzenith",
        description: "DevZenith is a collaborative platform where developers connect, share resources, and work on projects together.",
    },
    {
        name: "DigiMarket",
        techUsed: ["React", "Redux", "Firebase"],
        thumbnail: "https://anas-nadkar.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDigimarket.fbdb9c37.png&w=640&q=70", // Replace with your image URL
        liveLink: "https://taskmanager.com",
        githubUrl: "https://github.com/taskmanager",
        description: "DigiMarket stands out as the premier marketplace for all things related to tailwindcss, offering an unparalleled platform for both sellers and buyers alike.",
    },
    {
        name: "ProjectHub",
        techUsed: ["React", "Next.js", "Tailwind"],
        thumbnail: "https://via.placeholder.com/150", // Replace with your image URL
        liveLink: "https://projecthub.com",
        githubUrl: "https://github.com/projecthub",
        description: "OpenSourceHub is a platform designed to connect open-source contributors with trending repositories. It facilitates collaboration, enables mentorship, and streamlines the contribution process.",
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
        <div className="flex flex-col items-center gap-4 pt-16">
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
            className="transform-gpu overflow-hidden rounded-xl border bg-[#202020] p-4 text-white shadow-lg transition-all hover:scale-105"
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <img
                src={project.thumbnail}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="text-xl font-bold text-[#FFEE00]">{project.name}</div>
            <div className="text-sm text-gray-400 mt-2">
                {project.techUsed.join(", ")}
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
            <div className="w-full max-w-lg p-8 bg-[#282828] text-white rounded-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">{project.name}</h2>
                    <button onClick={onClose} className="text-white text-xl">
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
                        className="flex items-center gap-2 px-4 py-2 bg-[#ed8445] rounded-full text-white hover:bg-[#ffab61]"
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
