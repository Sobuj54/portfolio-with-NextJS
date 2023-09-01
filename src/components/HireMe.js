import React from "react";
import { DeveloperText } from "./icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <DeveloperText className="fill-dark animate-spin-slow"></DeveloperText>
        <Link
          href="/"
          className="flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark h-20 w-20 rounded-full font-semibold hover:bg-light hover:text-dark">
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
