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
        icon: <FaReact size='50px'/>,
        link: "https://stripe.com",
    },
    {
        title: "Tailwind",
        icon: <SiTailwindcss size='50px' />,
        link: "https://netflix.com",
    },
    {
        title: "Javascript",
        icon:<RiJavascriptFill size='50px' />,
        link: "https://google.com",
    },
    {
        title: "TypeScript",
        icon: <BiLogoTypescript size='50px' /> ,
        link: "https://meta.com",
    },
    {
        title: "MongoDb",
        icon: <SiMongodb size='50px' /> ,
        link: "https://amazon.com",
    },
    {
        title: "Express.js",
        icon: <SiExpress size='50px' />,
        link: "https://microsoft.com",
    },
    {
        title: "Node.js",
        icon: <FaNodeJs size='50px' /> ,
        link: "https://microsoft.com",
    },
    {
        title: "Git",
        icon: <FaGitAlt size='50px' />,
        link: "https://microsoft.com",
    },
    {
        title: "Next.js",
        icon: <SiNextdotjs size='50px' />,
        link: "https://microsoft.com",
    },
];

export default Skills
