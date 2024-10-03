import React from 'react'
import { HoverEffect } from '../ui/card-hover-effect';
import Title from './Title';
import { FaReact } from 'react-icons/fa';
import { SiAuth0, SiOpenai, SiPostgresql, SiPrisma, SiStripe, SiSupabase, SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaStripe } from 'react-icons/fa6';


const Skills = () => {
    return (
        <div className='max-w-5xl mx-auto px-4 lg:pt-20'>
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
    },
    {
        title: "Next.js",
        icon: <SiNextdotjs size='50px' />,
    },
    {
        title: "Tailwind",
        icon: <SiTailwindcss size='50px' />,
    },
    {
        title: "Javascript",
        icon:<RiJavascriptFill size='50px' />,
    },
    {
        title: "TypeScript",
        icon: <BiLogoTypescript size='50px' /> ,
    },
    {
        title: "Prisma Orm",
        icon: <SiPrisma size='50px' />,
    },
    {
        title: "PostgreSQL",
        icon: <SiPostgresql size='50px' /> ,
    },
    {
        title: "Supabase",
        icon: <SiSupabase size='50px' /> ,
    },
    {
        title: "Auth0",
        icon: <SiAuth0 size='50px' /> ,
    },
    {
        title: "MongoDb",
        icon: <SiMongodb size='50px' /> ,
    },
    {
        title: "Express.js",
        icon: <SiExpress size='50px' />,
    },
    {
        title: "Node.js",
        icon: <FaNodeJs size='50px' /> ,
    },
    {
        title: "Git",
        icon: <FaGitAlt size='50px' />,
    },
    {
        title: "Stripe",
        icon: <FaStripe size='50px' /> ,
    },
    {
        title: "OpenAI",
        icon: <SiOpenai size='50px' /> ,
    },
    
];

export default Skills
