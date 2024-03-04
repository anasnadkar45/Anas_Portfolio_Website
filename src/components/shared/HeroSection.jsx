import React from 'react'

const HeroSection = () => {
    return (
        <div className='flex items-center justify-between relative min-h-[60vh] flex-col-reverse lg:flex-row gap-12 lg:gap-0'>

            <div className='space-y-6 text-center lg:text-left'>
                <h1 className='text-4xl lg:text-6xl font-bold'>Nice to meet you! 👋 <br />
                    <span className='underline underline-offset-4  decoration-[#1AD46F] text-[#FFEE00]'>I'm Anas Nadkar</span>.
                </h1>
                <p className='md:w-96 text-lg text-gray-300'>Based in Cambodia, I'm a Fullstack developer passionate about building a modern web application that users love.</p>
            </div>

            <div>
                <div className="w-52 h-52 space-y-3 rotate-[60deg] mr-20">
                    <div className="flex gap-3 translate-x-8">
                        <div className=" w-24 h-24 rounded-2xl bg-green-500"></div>
                        <div className=" w-24 h-24 rounded-full bg-[#FFEE00]"></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className=" w-24 h-24 rounded-2xl bg-[#FFEE00]"></div>
                        <div className=" w-24 h-24 rounded-full bg-green-500"></div>
                    </div>
                </div>
            </div>

            <div className='glow absolute top-[50%] right-44 opacity-90'></div>
        </div>
    )
}

export default HeroSection
