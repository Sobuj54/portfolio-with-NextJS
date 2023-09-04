import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import BackEndSkills from "./BackEndSkills";
import DatabaseManagement from "./DatabaseManagement";
import VersionControl from "./VersionControl";
import ProblemSolving from "./ProblemSolving";
import Details from "./Details";

// this is the parent component
const SkillDetails = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="mt-52 md:mt-32">
      <h2 className="mb-24 font-bold text-6xl w-full text-center md:text-5xl sm:text-4xl md:mb-14">
        Skill Details
      </h2>
      <h3 className="text-2xl font-semibold w-[55%] mx-auto mb-10 pl-6 md:pl-2 md:w-[90%] md:text-xl">
        Front-End Development
      </h3>

      {/* front end */}
      <div ref={ref} className="w-[75%] mx-auto lg:w-[90%] md:w-full relative ">
        {/* front end */}

        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
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
