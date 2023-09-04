import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import Details from "./Details";

const DatabaseManagement = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32">
      {/* front end */}
      <h3 className="text-2xl font-semibold w-[55%] mx-auto mb-10 pl-6 md:pl-2 md:w-[90%] md:text-xl">
        Database Management
      </h3>
      <div ref={ref} className="w-[75%] mx-auto lg:w-[90%] md:w-full relative ">
        {/* front end */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 ">
          {/* mongodb */}
          <Details
            title="MongoDB"
            description="Proficient in MongoDB, a NoSQL database, for storing and retrieving data efficiently, querying, and basic knowledge in aggregation pipelines."></Details>
        </ul>
      </div>
    </div>
  );
};

export default DatabaseManagement;
