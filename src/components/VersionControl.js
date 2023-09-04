import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

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
        <h3 className="font-bold text-2xl text-primary">{title}</h3>
        <p className="font-medium text-dark w-full mt-3">{description}</p>
      </motion.div>
    </li>
  );
};

// this is the parent component
const VersionControl = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32">
      {/* front end */}
      <div className="w-[75%] mx-auto">
        {/* front end */}
        <h3 className="text-2xl font-semibold w-[70%] mx-auto mb-10 pl-4">
          Version Control
        </h3>

        <ul
          ref={ref}
          className="w-full flex flex-col items-start justify-between ml-4 relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
          />
          {/* git and github */}
          <Details
            title="Git and GitHub"
            description="Proficient in using Git for version control, managing code repositories, branching, merging, and collaborating with team members using GitHub."></Details>
        </ul>
      </div>
    </div>
  );
};

export default VersionControl;
