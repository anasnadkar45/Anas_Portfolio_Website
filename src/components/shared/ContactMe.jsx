import React from 'react'
import { Button } from '../ui/button'
import { BorderButton } from '../ui/moving-border'
import { IoMailUnread } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import Title from './Title';

const ContactMe = () => {
    return (
        <div className='flex-col items-center mb-10 px-4'>
            <div className='w-full flex justify-center'>
                <Title>Contact</Title>
            </div>

            <div className='max-w-5xl mx-auto mt-8 px-2 py-14 space-y-5 flex-col justify-center 
        items-center rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-90% to-[#0e0e0eac]'>
                <div className='space-y-5'>
                    <h1 className='text-center text-6xl font-bold text-[#FFEE00]'>Get In Touch</h1>
                    <p className='text-center text-slate-300 max-w-xl mx-auto text-lg'>I'm currently looking for opportunities. Whether its a
                        Full-Time Job or a Freelance work. Send me a message, I'll try to get back to you as soon as possible.</p>
                </div>
                <div className='flex justify-center gap-2 sm:gap-6 '>
                    <Button className='bg-[#1AD46F] text-black text-sm sm:text-lg font-semibold gap-1 group px-4'>
                        <IoMailUnread size='25px' /> Say Hello
                    </Button>
                    <BorderButton
                        className="bg-slate-900 text-white border-slate-800 rounded-md gap-1 
                        text-sm sm:text-lg font-semibold"
                    >
                        <IoLogoWhatsapp size='25px' /> Say Hello
                    </BorderButton>
                </div>
            </div>
        </div>

    )
}

export default ContactMe
