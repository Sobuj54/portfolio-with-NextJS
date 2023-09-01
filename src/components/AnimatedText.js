import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full flex items-center justify-center overflow-hidden">
      <motion.h2
        className={`${className} w-full inline-block text-dark text-6xl font-bold capitalize`}
        variants={quote}
        initial="initial"
        animate="animate">
        {text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={singleWord}>
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
};

export default AnimatedText;
