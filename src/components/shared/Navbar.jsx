import React, { useState } from 'react'
import Logo from '../../assets/Anaslogo2.svg'
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from '../ui/button';
import { Menu, X } from "lucide-react";
import { navItems } from '@/constants';


const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    
    return (

        <nav className="fixed top-0 right-0 left-0 z-50 py-3 backdrop-blur-lg  bg-black  border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative lg:text-sm ">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={Logo} alt="Logo" />
                        <span className="text-xl tracking-tight">nasNadkar</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="mailto:anasnadkar23@gmail.com">
                            <Button className='bg-[#FFEE00] text-black font-bold gap-1  group px-4'>
                                <span className='group-hover:-translate-x-2 transition-all duration-200'>Contact Me</span>
                                <FaArrowRightLong className='group-hover:translate-x-2 transition-all duration-200' />
                            </Button>
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end ">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-black w-full p-12 flex flex-col justify-center items-center  lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="mailto:anasnadkar23@gmail.com">
                                <Button className='bg-[#FFEE00] text-black font-bold gap-1  group px-4'>
                                    <span className='group-hover:-translate-x-2 transition-all duration-200'>Contact Me</span>
                                    <FaArrowRightLong className='group-hover:translate-x-2 transition-all duration-200' />
                                </Button>
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
