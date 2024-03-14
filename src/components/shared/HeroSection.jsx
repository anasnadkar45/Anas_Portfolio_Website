
const HeroSection = () => {
    return (
        <div className='w-full flex items-center relative justify-between min-h-[60vh]  flex-col-reverse lg:flex-row gap-12 lg:gap-0 sm:pt-32 px-8 sm:px-0'>

            <div className='space-y-6 text-center lg:text-left'>
                <h1 className='text-4xl lg:text-6xl font-bold'>Nice to meet you! 👋 <br />
                    <span className='underline underline-offset-4  decoration-[#1AD46F] text-[#FFEE00]'>I'm Anas Nadkar</span>.
                </h1>
                <p className='md:w-96 text-lg text-gray-300'>Based in India, I'm a Fullstack developer passionate about building a modern web application that users love.</p>
            </div>

            <div className='relative'>
                {/* <div className='absolute z-30 bottom-0 right-0 shadow-[#05ff9f] shadow-2xl bg-[#05ff9f] w-[340px] h-[250px]'></div> */}
                <div className=" w-52 h-52 space-y-3 z-40 rotate-[60deg] mb-8 mt-32 sm:mt-0 sm:mb-0 sm:mr-20">
                    <div className="flex gap-3 translate-x-8">
                        <div className=" w-24 h-24 rounded-2xl bg-green-500"></div>
                        <div className=" w-24 h-24 rounded-full bg-[#FFEE00]"></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className=" w-24 h-24 rounded-2xl bg-[#FFEE00]"></div>
                        <div className=" w-24 h-24 rounded-full bg-green-500"></div>
                    </div>
                    {/* <HeroBgAnimation />
                    <img src={ProgrammingAnimate} alt="" className='rotate-[-60deg]'/> */}
                </div>

            </div>


        </div>
    )
}

export default HeroSection
