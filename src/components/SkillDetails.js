import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";
import BackEndSkills from "./BackEndSkills";
import DatabaseManagement from "./DatabaseManagement";
import VersionControl from "./VersionControl";
import ProblemSolving from "./ProblemSolving";

const Details = ({ title, description }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between">
      <LiIcon reference={ref}></LiIcon>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="font-bold text-2xl text-primary dark:text-primaryDark">
          {title}
        </h3>
        <p className="font-medium text-dark dark:text-light w-full mt-3">
          {description}
        </p>
      </motion.div>
    </li>
  );
};

// this is the parent component
const SkillDetails = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-64">
      <h2 className="mb-24 font-bold text-6xl w-full text-center">
        Skill Details
      </h2>

      {/* front end */}
      <div className="w-[75%] mx-auto">
        {/* front end */}
        <h3 className="text-2xl font-semibold w-[70%] mx-auto mb-10 pl-4">
          Front-End Development
        </h3>

        <ul
          ref={ref}
          className="w-full flex flex-col items-start justify-between ml-4 relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
          />
          {/* html */}
          <Details
            title="HTML5"
            description="Proficient in creating structured and semantically correct web pages using HTML5, ensuring accessibility and SEO best practices."></Details>

          {/* css */}
          <Details
            title="CSS3"
            description="Strong command of CSS3 for styling web content, including layout design, and responsiveness across various devices and screen sizes."></Details>

          {/* Tailwind CSS */}
          <Details
            title="Tailwind CSS"
            description="Proficient in using the utility-first CSS framework, Tailwind CSS, for rapid and efficient styling of web applications, including responsive design and customization."></Details>

          {/* js */}
          <Details
            title="JavaScript"
            description=" Proficient in using JavaScript to add interactivity and functionality to web pages, including event handling, DOM manipulation, and AJAX requests."></Details>

          {/* React.js */}
          <Details
            title="React.js"
            description="Skilled in building single-page applications (SPAs) and user interfaces using React.js, including state management, component composition, and integration with APIs."></Details>
        </ul>
      </div>
      <BackEndSkills></BackEndSkills>
      <DatabaseManagement></DatabaseManagement>
      <VersionControl></VersionControl>
      <ProblemSolving></ProblemSolving>
    </div>
  );
};

export default SkillDetails;
