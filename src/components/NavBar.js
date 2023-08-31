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

      <nav>
        {/* twitter */}
        <Link href="/" target="_blank">
          <TwitterIcon></TwitterIcon>
        </Link>
        <Link href="/" target="_blank">
          <GithubIcon></GithubIcon>
        </Link>
        <Link href="/" target="_blank">
          <LinkedInIcon></LinkedInIcon>
        </Link>
        <Link href="/" target="_blank">
          <PinterestIcon></PinterestIcon>
        </Link>
        <Link href="/" target="_blank">
          <DribbbleIcon></DribbbleIcon>
        </Link>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo></Logo>
      </div>
    </header>
  );
};

export default NavBar;
