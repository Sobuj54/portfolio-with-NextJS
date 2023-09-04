import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import Details from "./Details";

const ProblemSolving = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32">
      {/* front end */}

      <h3 className="text-2xl font-semibold w-[55%] mx-auto mb-10 pl-6 md:pl-2 md:w-[90%] md:text-xl">
        Problem Solving and Adaptability
      </h3>
      <div ref={ref} className="w-[75%] mx-auto lg:w-[90%] md:w-full relative ">
        {/* front end */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          {/* analytical skills */}
          <Details
            title="Analytical Skills"
            description="Strong analytical and problem-solving skills, with the ability to identify and resolve complex technical issues efficiently."></Details>
          {/* adaptability */}
          <Details
            title="Adaptability"
            description="Adaptability to new technologies and a commitment to staying updated with industry trends and emerging best practices in web development."></Details>
        </ul>
      </div>
    </div>
  );
};

export default ProblemSolving;
