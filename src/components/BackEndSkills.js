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
const BackEndSkills = () => {
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
          Back-End Development
        </h3>

        <ul
          ref={ref}
          className="w-full flex flex-col items-start justify-between ml-4 relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
          />
          {/* nodejs */}
          <Details
            title="Node.js"
            description="Proficient in server-side JavaScript development with Node.js, including creating APIs, handling HTTP requests, and managing server logic"></Details>

          {/* express */}
          <Details
            title="Express.js"
            description="Skilled in building robust and scalable web applications using the Express.js framework, including route handling, middleware implementation, and error management."></Details>

          {/* rest API */}
          <Details
            title="RESTful APIs"
            description=" Competent in designing RESTful APIs for efficient communication between the client and server, adhering to best practices for HTTP methods and status codes."></Details>

          {/* authentication */}
          <Details
            title="Authentication and Authorization"
            description="Familiarity with implementing secure authentication and authorization mechanisms, such as JWT (JSON Web Tokens) to protect web applications."></Details>
        </ul>
      </div>
    </div>
  );
};

export default BackEndSkills;
