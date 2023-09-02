import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import mongoDB from "../../public/icons/mongodb.png";
import ReactJS from "../../public/icons/react.png";
import html from "../../public/icons/html.png";
import css from "../../public/icons/css3.png";
import express from "../../public/icons/express.png";
import js from "../../public/icons/javascript.png";
import nodejs from "../../public/icons/nodejs.png";
import tailwind from "../../public/icons/icons8-tailwindcss-48.png";
import git from "../../public/icons/icons8-git-96.png";

const Skill = ({ name, x, y, icon }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-white py-3 px-6 absolute shadow-dark cursor-pointer dark:text-dark dark:bg-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}>
      {name}
      <Image
        src={icon}
        alt="icon"
        className="w-12 ml-3 bg-slate-100 px-1 py-1 rounded-lg"></Image>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h3 className="text-6xl font-bold mt-64 w-full text-center">Skills</h3>
      <div className="w-full h-screen  flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 w-20 h-20 shadow-dark cursor-pointer dark:text-dark dark:bg-light"
          whileHover={{ scale: 1.05 }}>
          Web
        </motion.div>

        <Skill name="HTML" x="-20vw" y="2vw" icon={html}></Skill>
        <Skill name="CSS" x="-5vw" y="-10vw" icon={css}></Skill>
        <Skill name="JavaScript" x="20vw" y="6vw" icon={js}></Skill>
        <Skill name="ReactJS" x="0vw" y="12vw" icon={ReactJS}></Skill>
        <Skill name="NodeJS" x="-20vw" y="-15vw" icon={nodejs}></Skill>
        <Skill name="ExpressJS" x="15vw" y="-12vw" icon={express}></Skill>
        <Skill name="MongoDB" x="32vw" y="-5vw" icon={mongoDB}></Skill>
        <Skill name="TailwindCSS" x="0vw" y="-20vw" icon={tailwind}></Skill>
        <Skill name="Git" x="18vw" y="18vw" icon={git}></Skill>
      </div>
    </>
  );
};

export default Skills;
