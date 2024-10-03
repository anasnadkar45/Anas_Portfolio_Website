import { motion } from "framer-motion"; // Animation library (ensure it's installed via npm or yarn)

const HeroSection = () => {
  return (
    <div className='w-full flex items-center relative justify-between min-h-[60vh] flex-col-reverse lg:flex-row gap-12 lg:gap-0 sm:pt-32 px-8 sm:px-0'>
      {/* Text Section */}
      <motion.div 
        className='space-y-6 text-center lg:text-left'
        initial={{ opacity: 0, x: -50 }} // Starting state for animation
        animate={{ opacity: 1, x: 0 }} // Animate to final state
        transition={{ duration: 0.8, ease: "easeInOut" }} // Timing and easing
      >
        <h1 className='text-4xl lg:text-6xl font-bold'>
          Nice to meet you! 👋 <br />
          <span className='underline underline-offset-4 decoration-[#1AD46F] text-[#FFEE00]'>
            I'm Anas Nadkar
          </span>.
        </h1>
        <p className='md:w-96 text-lg text-gray-300'>
          Based in India, I'm a Fullstack developer passionate about building modern web applications that users love.
        </p>
      </motion.div>

      {/* Animated Boxes Section */}
      <motion.div 
        className='relative'
        initial={{ opacity: 0, scale: 0.8 }} // Start with scaled-down
        animate={{ opacity: 1, scale: 1 }} // Animate to full scale
        transition={{ duration: 1, ease: "easeInOut" }} // Timing and easing
      >
        <div className="w-40 h-40 md:w-52 md:h-52 space-y-3 z-40 rotate-[60deg] mb-8 mt-32 sm:mt-0 sm:mb-0 sm:mr-20">
          <div className="flex gap-3 translate-x-8">
            <motion.div
              className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-green-500"
              whileHover={{ scale: 1.1 }} // Hover animation
              transition={{ type: "spring", stiffness: 100 }} // Bouncy effect
            ></motion.div>
            <motion.div
              className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#FFEE00]"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100 }}
            ></motion.div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <motion.div
              className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-[#FFEE00]"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100 }}
            ></motion.div>
            <motion.div
              className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-green-500"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 100 }}
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
