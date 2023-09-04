import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import Details from "./Details";

const BackEndSkills = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32">
      {/* front end */}
      <h3 className="text-2xl font-semibold w-[55%] mx-auto mb-10 pl-6 md:pl-2 md:w-[90%] md:text-xl">
        Back-End Development
      </h3>
      <div ref={ref} className="w-[75%] mx-auto lg:w-[90%] md:w-full relative ">
        {/* front end */}

        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
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
