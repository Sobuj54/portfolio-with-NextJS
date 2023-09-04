import React, { useRef } from "react";
import LiIcon from "./LiIcon";
import { motion } from "framer-motion";

const Details = ({ title, description }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[70%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      <LiIcon reference={ref}></LiIcon>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="font-bold text-2xl sm:text-xl xs:text-lg text-primary dark:text-primaryDark">
          {title}
        </h3>
        <p className="font-medium text-dark dark:text-light w-full mt-3 md:text-sm">
          {description}
        </p>
      </motion.div>
    </li>
  );
};

export default Details;
