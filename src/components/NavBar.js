import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
} from "./icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  // this useRouter() hook is similar to useLocation hook
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`inline-block bg-dark h-[2px] absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}>
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4"></CustomLink>
        <CustomLink href="/about" title="About" className="mx-4"></CustomLink>
        <CustomLink
          href="/projects"
          title="Projects"
          className="mx-4"></CustomLink>
        <CustomLink
          href="/articles"
          title="Articles"
          className="ml-4"></CustomLink>
      </nav>

      {/* social logo */}
      <nav className="flex justify-center items-center flex-wrap">
        {/* twitter */}
        <motion.a
          href="https://twitter.com/"
          target="_blank"
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3">
          <TwitterIcon></TwitterIcon>
        </motion.a>
        {/* github */}
        <motion.a
          href="https://github.com/Sobuj54"
          target="_blank"
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3">
          <GithubIcon></GithubIcon>
        </motion.a>
        {/* linkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/sobuj-ahmed-8a782b177/"
          target="_blank"
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3">
          <LinkedInIcon></LinkedInIcon>
        </motion.a>
        {/* pinterest */}
        <motion.a
          href="/"
          target="_blank"
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3">
          <PinterestIcon></PinterestIcon>
        </motion.a>
        {/* dribble */}
        <motion.a
          href="/"
          target="_blank"
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3">
          <DribbbleIcon></DribbbleIcon>
        </motion.a>
      </nav>
      {/* middle logo */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo></Logo>
      </div>
    </header>
  );
};

export default NavBar;
