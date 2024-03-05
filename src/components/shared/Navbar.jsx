import React from 'react'
import Logo from '../../assets/Anaslogo2.svg'
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from '../ui/button';
// import FloatingNav from '../ui/floating-navbar';


const Navbar = () => {
    // const navItems = [
    //     {
    //         name: "Home",
    //         link: "/",
    //         // icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    //     },
    //     {
    //         name: "About",
    //         link: "/about",
    //         // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    //     },
    //     {
    //         name: "Contact",
    //         link: "/contact",
    //         // icon: (
    //         //     <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    //         // ),
    //     },
    // ];
    return (
        <nav className='h-[70px] w-full my-auto flex items-center justify-between 
        border-b-[2px] border-[#1a1a1a] '>
            <div className='flex items-center gap-1 group cursor-pointer'>
                <img src={Logo} alt="" className='h-8 group-hover:rotate-[270deg] transition-all duration-500' />
                <h1 className='text-2xl font-bold capitalize underline underline-offset-4 decoration-[#1AD46F]'>nas Nadkar</h1>
            </div>

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
        // <div className="relative  w-full">
        //     <FloatingNav navItems={navItems} />
        // </div>
    )
}

export default Navbar
