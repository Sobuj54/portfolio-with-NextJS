import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { GithubIcon } from "@/components/icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import docHouse from "../../public/images/projects/Doc House.png";
import bistroBoss from "../../public/images/projects/bistro boss.png";
import jerinsParlour from "../../public/images/projects/Jerins Parlour.png";
import selhono from "../../public/images/projects/selhono.png";
import summerCamp from "../../public/images/projects/summer-camp.png";
import youtube from "../../public/images/projects/youtube backend.png";
import tastebite from "../../public/images/projects/tastebite.png";
import estateHub from "../../public/images/projects/estatehub.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-3xl border-dark bg-light rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      {/* this creates shadow like dark in sections */}
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        ></FramerImage>
      </Link>

      <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-4"
        >
          <h2 className="my-2 w-full font-bold text-3xl text-left dark:text-light sm:text-[20px]">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="flex items-center mt-2 dark:text-light">
          <Link
            href={github}
            target="_blank"
            className="w-10"
            data-te-toggle="tooltip"
            title="Visit Repo"
          >
            <GithubIcon></GithubIcon>
          </Link>
          <Link
            href={link}
            target="_blank"
            className="px-6 py-2 ml-4 text-lg font-semibold border rounded-lg bg-dark hover:bg-light hover:text-dark hover:border-dark text-light dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:border-light hover:dark:text-light hover:dark:border sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = ({ type, title, img, link, github, summary }) => {
  return (
    <article className="relative flex flex-col items-center justify-center w-full p-6 border border-solid rounded-2xl border-dark bg-light dark:bg-dark dark:border-light dark:text-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

      <Link
        href={link}
        target="_blank"
        className="w-full overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        50vw"
        ></FramerImage>
      </Link>

      <div className="flex flex-col items-start justify-between w-full mt-4 ">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-4"
        >
          <h2 className="my-2 w-full font-bold text-3xl text-left lg:text-2xl sm:text-[20px]">
            {title}
          </h2>
          <p className="my-2 font-medium text-dark dark:text-light">
            {summary}
          </p>
        </Link>

        <div className="flex items-center justify-between w-full mt-2">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline underline-offset-2 md:text-base"
          >
            Visit
          </Link>

          <Link
            href={github}
            target="_blank"
            className="w-8 md:w-6"
            data-te-toggle="tooltip"
            title="Visit Repo"
          >
            <GithubIcon></GithubIcon>
          </Link>
        </div>
      </div>
    </article>
  );
};

// main executing program component
const projects = () => {
  return (
    <>
      <Head>
        <title>Sobuj | Projects</title>
        <meta name="description" content="projects" />
      </Head>
      <TransitionEffect></TransitionEffect>
      <main className="flex flex-col items-center justify-center w-full mb-16 ">
        <Layout className="pt-16">
          <AnimatedText
            text="My Projects"
            className="text-center mb-16 lg:!text-5xl sm:mb-8 sm:!text-4xl"
          ></AnimatedText>
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="EstateHub"
                summary="A comprehensive real estate marketplace web application built with modern React technologies, enabling users to browse, search, and manage properties with advanced features for buyers, sellers, and agents.
                The application provides an intuitive interface for property discovery, detailed property information, agent management tools, and user profile customization."
                link="https://estate-hub-one.vercel.app/homepage"
                type="Featured Project"
                img={estateHub}
                github="https://github.com/Sobuj54/EstateHub/tree/master/realestate%20front%20end"
              ></FeaturedProject>
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Projects
                title="Selhono"
                summary="A comprehensive estate listing site that includes various propery sites and their pricing. Different services offered by the company. Their previous works and projects are listed. Varous news feeds are added. Various projects and their details are listed. Blogs are added for most current news and services. This is fullstack project with reactjs, nodejs and mongodb. All industry standared code practices has been followed. 
                The project demonstrates my
                expertise in component architecture, state management, and creating engaging user experiences
                that solve real business challenges"
                link="https://selhono-house.netlify.app/"
                type="Featured Project"
                img={selhono}
                github="https://github.com/Sobuj54/selhono"
              ></Projects>
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Projects
                title="TasteBite"
                summary="A comprehensive restaurant management system built with React that showcases advanced frontend development skills. This responsive web application features intuitive menu browsing, realtime order tracking, and a dynamic loyalty program interface. The project demonstrates my
                expertise in component architecture, state management, and creating engaging user experiences
                that solve real business challenges"
                link="https://tastebite-three.vercel.app/menu-browse-search"
                type="Featured Project"
                img={tastebite}
                github="https://github.com/Sobuj54/TasteBite-Restaurant-App"
              ></Projects>
            </div>

            <div className="col-span-12">
              {/* first featured project toy emporium */}
              <FeaturedProject
                title="Art & Craft"
                summary="A summer camp web application showcasing different classes and instructors. This application was created using ReactJS, ContextAPI, Firebase, TailwindCSS, React Router. For server NodeJs, Express and MongoDB."
                link="https://summer-camp-345fa.web.app/"
                type="Featured Project"
                img={summerCamp}
                github="https://github.com/Sobuj54/module-82-summer-camp-client"
              ></FeaturedProject>
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Projects
                title="Youtube Backend"
                summary="A youtube backend application which handles authentication, video upload, like, dislike, comment, view, subscription, playlist, channel. This application was created using NodeJs, Express, MongoDB,Mongoose, JWT, Bcrypt, Multer, Cloudinary"
                link="#"
                type="Featured Project"
                img={youtube}
                github="https://github.com/Sobuj54/youtube-backend-professional-project"
              ></Projects>
            </div>

            <div className="col-span-6 sm:col-span-12">
              {/* Doc house */}
              <Projects
                title="Doc House"
                summary="A Dentist web application showcasing Doctors and available Services. This application was created using ReactJS, ContextAPI, Firebase, TailwindCSS, React Router. For server NodeJs, Express and MongoDB."
                link="https://doc-house-1030e.web.app/"
                type="Featured Project"
                img={docHouse}
                github="https://github.com/Sobuj54/module-76-doc-house-client-practice"
              ></Projects>
            </div>

            <div className="col-span-12">
              {/* jerins parlour */}
              <FeaturedProject
                title="Jerins Parlour"
                summary="A web application showcasing different beauty services for women. People can book their desired beauty services. This application was created using ReactJS, ContextAPI, Firebase, TailwindCSS, React Router. For server NodeJs, Express and MongoDB."
                link="https://jerins-parlour-275cf.web.app/"
                type="Featured Project"
                img={jerinsParlour}
                github="https://github.com/Sobuj54/module-81-jerins-parlour-client"
              ></FeaturedProject>
            </div>

            <div className="col-span-12">
              {/* bistro boss */}
              <FeaturedProject
                title="Bistro Boss"
                summary="A Restaurant web application showcasing menu. Customers can book food.This application also has stripe payment system.This application was created using ReactJS, ContextAPI, Firebase, TailwindCSS, React Router. For server NodeJs, Express and MongoDB."
                link="https://bistro-boss-5e1ed.web.app/"
                type="Featured Project"
                img={bistroBoss}
                github="https://github.com/Sobuj54/module-74-bistro-boss-client"
              ></FeaturedProject>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
