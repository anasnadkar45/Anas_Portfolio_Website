import React from 'react'
import Logo from '../../assets/Anaslogo2.svg'
import { FaGithub } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from '../ui/button';

const Navbar = () => {
    // const Links = [
    //     {
    //         link: "https://www.linkedin.com/in/anas-nadkar-2765121a9/?originalSubdomain=in",
    //         label: "LinkedIn",
    //         icon: <FaGithub size='30px' />
    //     },
    //     {
    //         link: "https://www.linkedin.com/in/anas-nadkar-2765121a9/?originalSubdomain=in",
    //         label: "LinkedIn",
    //         icon: <FaGithub size='30px' />
    //     },
    //     {
    //         link: "https://www.linkedin.com/in/anas-nadkar-2765121a9/?originalSubdomain=in",
    //         label: "LinkedIn",
    //         icon: <FaGithub size='30px' />
    //     },
    //     {
    //         link: "https://www.linkedin.com/in/anas-nadkar-2765121a9/?originalSubdomain=in",
    //         label: "LinkedIn",
    //         icon: <FaGithub size='30px' />
    //     },
    //     {
    //         link: "https://www.linkedin.com/in/anas-nadkar-2765121a9/?originalSubdomain=in",
    //         label: "LinkedIn",
    //         icon: <FaGithub size='30px' />
    //     },
    // ]

    return (
        <nav className='h-[70px] w-full my-auto flex items-center justify-between 
        border-b-[1px] border-gray-700 '>
            <div className='flex items-center gap-1'>
                <img src={Logo} alt="" className='h-8' />
                <h1 className='text-2xl font-bold capitalize underline underline-offset-4 decoration-[#1AD46F]'>nas Nadkar</h1>
            </div>


            {/* <div className='flex items-center '>
                {
                    Links.map((link)=>(
                        <a href="">
                            {link.icon}
                        </a>
                    ))
                }
            </div> */}

            <div className='flex gap-8'>
                <li className='flex gap-8 items-center'>
                    <ul className='text-lg'>Home</ul>
                    <ul className='text-lg'>Skills</ul>
                    <ul className='text-lg'>Projects</ul>
                    <ul className='text-lg'>Footer</ul>
                </li>

                <Button className='bg-[#FFEE00] text-black font-bold gap-1  group px-4'>
                    <span className='group-hover:-translate-x-2 transition-all duration-200'>Contact Me</span>
                    <FaArrowRightLong className='group-hover:translate-x-2 transition-all duration-200' />
                </Button>
            </div>

        </nav>
    )
}

export default Navbar
