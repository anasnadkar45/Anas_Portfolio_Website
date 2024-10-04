import React from 'react'
import Logo from '../../assets/Anaslogo2.svg'
import Portfolio from '../../assets/PORTFOLIO.svg'
import Portfolio2 from '../../assets/Portfolio.png'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa6'

const Footer = () => {
    const Links = [
        {
            link: "https://www.linkedin.com/in/anas-nadkar-2765121a9/?originalSubdomain=in",
            label: "Github",
            icon: <FaLinkedin size='25px' />
        },
        {
            link: "https://github.com/anasnadkar45/",
            label: "LinkedIn",
            icon: <FaGithub size='25px' />
        },
        {
            link: "https://twitter.com/anasnadkar45",
            label: "Twitter",
            icon: <FaTwitter size='25px' />
        },
    ]
    return (
        <div>
            <img src={Portfolio2} alt="Portfolio" className='px-5' />
            <div className='border-t border-gray-700 py-10 space-y-3 flex justify-between px-5'>
                {/* <h1 className='absolute top-[50%] left-0'>© 2024 Anas Nadkar. All rights reserved.</h1> */}
                <div className='flex items-center gap-1 justify-center'>
                    <img src={Logo} alt="" className='h-8' />
                    <h1 className='text-2xl font-bold capitalize underline underline-offset-4 decoration-[#1AD46F]'>nas Nadkar</h1>
                </div>
                <div className='flex items-center justify-center space-x-2'>
                    {
                        Links.map((link) => (
                            <a href={link.link}>
                                {link.icon}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}

export default Footer
