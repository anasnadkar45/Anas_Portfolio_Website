import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

export const HoverEffect = ({
  items,
  className,
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx , index) => (
        <a
          href={item?.link}
          key={item?.index}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#FFEE00] dark:bg-slate-800/[0.8] block bg-opacity-70  rounded-lg"
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
          ring-[#1AD46F] relative z-20 transition-all duration-500 cursor-pointer">
            <div className="py-10 z-50 relative space-y-5">
              <p className="text-3xl font-bold text-center text-gray-300">{item.title}</p>
              <a href="" className="flex justify-center">{item.icon}</a>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

