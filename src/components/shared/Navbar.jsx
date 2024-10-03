import React, { useState, useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Menu, X } from "lucide-react";
import { navItems } from '@/constants';
import { Button } from '../ui/button';
import Logo from '../../assets/Anaslogo2.svg';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        setShowNavbar(true);
    }, []);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <motion.nav 
            className="fixed top-0 right-0 left-0 z-50 py-4 backdrop-blur-lg bg-black bg-opacity-60 border-b border-neutral-700/80 transition-colors duration-300"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-4 relative lg:text-sm">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.div 
                        className="flex items-center flex-shrink-0"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className='flex items-center gap-1 justify-center'>
                    <img src={Logo} alt="" className='h-8' />
                    <h1 className='text-2xl font-bold capitalize underline underline-offset-4 decoration-[#1AD46F]'>nas Nadkar</h1>
                </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex ml-14 space-x-8">
                        {navItems.map((item, index) => (
                            <motion.li 
                                key={index}
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            >
                                <a href={item.href} className="text-white text-lg hover:text-[#FFEE00] transition-colors duration-300">
                                    {item.label}
                                </a>
                            </motion.li>
                        ))}
                    </ul>

                    {/* Contact Button */}
                    <div className="hidden lg:flex space-x-6 items-center">
                        <a href="mailto:anasnadkar23@gmail.com">
                            <motion.div
                                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                            >
                                <Button className='bg-[#FFEE00] text-black font-bold gap-1 px-6 py-2 group'>
                                    <span className='group-hover:-translate-x-2 transition-all duration-300'>Contact Me</span>
                                    <FaArrowRightLong className='group-hover:translate-x-2 transition-all duration-300' />
                                </Button>
                            </motion.div>
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden">
                        <button onClick={toggleNavbar} className="text-white">
                            {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer */}
                {mobileDrawerOpen && (
                    <motion.div 
                        className="fixed right-0 left-0 z-20 bg-black flex flex-col items-center justify-center lg:hidden"
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ opacity: 1, y: 16.8 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ul className="flex flex-col space-y-8">
                            {navItems.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <a href={item.href} className="text-white text-2xl hover:text-[#FFEE00] transition-colors duration-300">
                                        {item.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                        <div className="mt-12">
                            <a href="mailto:anasnadkar23@gmail.com">
                                <Button className='bg-[#FFEE00] text-black font-bold gap-2 px-6 py-3 group'>
                                    <span className='group-hover:-translate-x-2 transition-all duration-300'>Contact Me</span>
                                    <FaArrowRightLong className='group-hover:translate-x-2 transition-all duration-300' />
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
