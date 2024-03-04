import React from 'react'
import { HoverEffect } from '../ui/card-hover-effect';
import Title from './Title';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";


const Skills = () => {
    return (
        <div className='max-w-5xl mx-auto px-8'>
            <div className='flex justify-center'>
                <Title>SKILLS</Title>
            </div>

            <HoverEffect items={skills} />
        </div>
    )
}

export const skills = [
    {
        title: "React",
        icon: <FaReact />,
        link: "https://stripe.com",
    },
    {
        title: "Tailwind",
        icon: <SiTailwindcss />,
        link: "https://netflix.com",
    },
    {
        title: "Javascript",
        icon:<RiJavascriptFill />,
        link: "https://google.com",
    },
    {
        title: "TypeScript",
        icon: <BiLogoTypescript /> ,
        link: "https://meta.com",
    },
    {
        title: "MongoDb",
        icon: <SiMongodb /> ,
        link: "https://amazon.com",
    },
    {
        title: "Express.js",
        icon: <SiExpress />,
        link: "https://microsoft.com",
    },
    {
        title: "Node.js",
        icon: <FaNodeJs /> ,
        link: "https://microsoft.com",
    },
    {
        title: "Git",
        icon: <FaGitAlt />,
        link: "https://microsoft.com",
    },
    {
        title: "Next.js",
        icon: <SiNextdotjs />,
        link: "https://microsoft.com",
    },
];

export default Skills
