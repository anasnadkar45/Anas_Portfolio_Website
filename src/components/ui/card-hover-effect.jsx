import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: false }); // Track if the item is in view

        return (
          <motion.a
            ref={ref} // Attach the ref to the motion component
            href={item?.link}
            key={item?.index}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 20 }} // Initial state for animation
            animate={{
              opacity: isInView ? 1 : 0, // Animate to full opacity if in view
              y: isInView ? 0 : 20, // Reset Y position if in view
            }}
            transition={{ duration: 0.5, delay: idx * 0.1 }} // Delay based on index for staggering effect
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-[#FFEE00] dark:bg-slate-800/[0.8] block bg-opacity-70 rounded-lg"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>

            <div className="rounded-md w-full p-4 overflow-hidden bg-black group-hover:ring-4 
            ring-[#1AD46F] relative z-20 transition-all duration-500 cursor-pointer border border-slate-400">
              <div className="py-10 z-50 relative space-y-5 ">
                <p className="text-3xl font-bold text-center text-[#FFEE00]">{item.title}</p>
                <a href="" className="flex justify-center hover:text-[#1AD46F]">{item.icon}</a>
              </div>
            </div>
          </motion.a>
        );
      })}
    </div>
  );
};
