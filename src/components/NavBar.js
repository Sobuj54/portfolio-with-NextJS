import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
} from "./icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  // this useRouter() hook is similar to useLocation hook
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`inline-block bg-dark h-[2px] absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
          router.asPath === href ? "w-full" : "w-0"
        }`}>
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  // this useRouter() hook is similar to useLocation hook
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark`}
      onClick={handleClick}>
      {title}
      <span
        className={`inline-block bg-light dark:bg-dark h-[2px] absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}>
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light">
      {/* this is hamburger menu as well as cross button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden lg:flex flex-col items-center justify-center">
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}></span>
      </button>

      {/* desktop menu */}
      <div className="w-full flex items-center justify-between lg:hidden">
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
            href="https://twitter.com/Sobuj03794254"
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
          {/* pinterest
        <motion.a
          href="/"
          target="_blank"
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 bg-light rounded-full">
          <PinterestIcon></PinterestIcon>
        </motion.a> */}
          {/* dribble */}
          {/* <motion.a
          href="/"
          target="_blank"
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3">
          <DribbbleIcon></DribbbleIcon>
        </motion.a> */}

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-4 flex items-center justify-center p-1 rounded-full ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}>
            {mode === "dark" ? (
              <SunIcon className="fill-dark"></SunIcon>
            ) : (
              <MoonIcon className="fill-dark"></MoonIcon>
            )}
          </button>
        </nav>
      </div>

      {/* mobile menu */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 0.4 } }}
          className="min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-32">
          <nav className="flex flex-col items-center justify-center space-y-3 mb-6">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={() => setIsOpen(!isOpen)}></CustomMobileLink>
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={() => setIsOpen(!isOpen)}></CustomMobileLink>
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={() => setIsOpen(!isOpen)}></CustomMobileLink>
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=""
              toggle={() => setIsOpen(!isOpen)}></CustomMobileLink>
          </nav>

          {/* social logo */}
          <nav className="flex justify-center items-center flex-wrap">
            {/* twitter */}
            <motion.a
              href="https://twitter.com/Sobuj03794254"
              target="_blank"
              whileHover={{
                y: -2,
              }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mr-3 sm:mx-1">
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
              className="w-6 mx-3 bg-light dark:bg-dark rounded-full sm:mx-1">
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
              className="w-6 mx-3 sm:mx-1">
              <LinkedInIcon></LinkedInIcon>
            </motion.a>
            {/* pinterest
        <motion.a
          href="/"
          target="_blank"
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3 bg-light rounded-full">
          <PinterestIcon></PinterestIcon>
        </motion.a> */}
            {/* dribble */}
            {/* <motion.a
          href="/"
          target="_blank"
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          className="w-6 ml-3">
          <DribbbleIcon></DribbbleIcon>
        </motion.a> */}

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-4 flex items-center justify-center p-1 rounded-full ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}>
              {mode === "dark" ? (
                <SunIcon className="fill-dark"></SunIcon>
              ) : (
                <MoonIcon className="fill-dark"></MoonIcon>
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      {/* middle logo */}
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo></Logo>
      </div>
    </header>
  );
};

export default NavBar;
