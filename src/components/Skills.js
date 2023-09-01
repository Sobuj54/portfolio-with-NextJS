import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 absolute shadow-dark cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}>
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h3 className="text-6xl font-bold mt-64 w-full text-center">Skills</h3>
      <div className="w-full h-screen flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}>
          Web
        </motion.div>

        <Skill name="HTML" x="-20vw" y="2vw"></Skill>
        <Skill name="CSS" x="-5vw" y="-10vw"></Skill>
        <Skill name="JavaScript" x="20vw" y="6vw"></Skill>
        <Skill name="ReactJS" x="0vw" y="12vw"></Skill>
        <Skill name="NodeJS" x="-20vw" y="-15vw"></Skill>
        <Skill name="ExpressJS" x="15vw" y="-12vw"></Skill>
        <Skill name="MongoDB" x="32vw" y="-5vw"></Skill>
        <Skill name="TailwindCSS" x="0vw" y="-20vw"></Skill>
      </div>
    </>
  );
};

export default Skills;
