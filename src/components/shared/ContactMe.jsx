import React from 'react'
import { Button } from '../ui/button'
import { BorderButton } from '../ui/moving-border'

const ContactMe = () => {
    return (
        <div className='max-w-5xl mx-auto px-8 min-h-[400px] flex justify-center items-center rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#000000]'>
            <div>
                <h1 className='text-center text-6xl'>Get In Touch</h1>
                <p className='text-center'>I'm currently looking for opportunities. Whether its a
                    Full-Time Job or a Freelance work. Send me a message, I'll try to get back to you as soon as possible.</p>
                <div className='flex justify-center'>
                    <Button className='bg-[#FFEE00] text-black text-lg font-semibold gap-1  group px-4'>Say Hello</Button>
                    <BorderButton
                        className="bg-slate-900 text-white border-slate-800 rounded-md text-lg font-semibold"
                    >
                        Say Hello
                    </BorderButton>
                </div>
            </div>

        </div>
    )
}

export default ContactMe
