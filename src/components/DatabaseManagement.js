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
const DatabaseManagement = () => {
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
          Database Management
        </h3>

        <ul
          ref={ref}
          className="w-full flex flex-col items-start justify-between ml-4 relative">
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
          />
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
