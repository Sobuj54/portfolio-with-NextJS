import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { GithubIcon } from "@/components/icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toyEmporium from "../../public/images/projects/Toy Emporium.png";
import docHouse from "../../public/images/projects/Doc House.png";
import carsDoctor from "../../public/images/projects/cars doctor.png";
import volunteerNetwork from "../../public/images/projects/volunteer network.png";
import chefsChoice from "../../public/images/projects/chefs choice.png";
import newsDragon from "../../public/images/projects/news dragon.png";
import bistroBoss from "../../public/images/projects/bistro boss.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl">
      {/* this creates shadow like dark in sections */}
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 overflow-hidden rounded-lg">
        <Image src={img} alt={title} className="w-full h-auto"></Image>
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-4">
          <h2 className="my-2 w-full font-bold text-4xl text-left">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>

        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            className="w-10"
            data-te-toggle="tooltip"
            title="Visit Repo">
            <GithubIcon></GithubIcon>
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light py-2 px-6 font-semibold text-lg">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = ({ type, title, img, link, github, summary }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full overflow-hidden rounded-lg">
        <Image src={img} alt={title} className="w-full h-auto"></Image>
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-4">
          <h2 className="my-2 w-full font-bold text-3xl text-left">{title}</h2>
          <p className="my-2 font-medium text-dark">{summary}</p>
        </Link>

        <div className="mt-2 w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="font-semibold text-lg underline underline-offset-2">
            Visit
          </Link>

          <Link
            href={github}
            target="_blank"
            className="w-8"
            data-te-toggle="tooltip"
            title="Visit Repo">
            <GithubIcon></GithubIcon>
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Sobuj | Projects</title>
        <meta name="description" content="projects" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="My Projects"
            className="text-center mb-16"></AnimatedText>
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              {/* first featured project toy emporium */}
              <FeaturedProject
                title="Toy Emporium"
                summary="A toy store web application showcasing car toys. This application was created using ReactJS, ContextAPI, Firebase, TailwindCSS, React Router. For server NodeJs, Express and MongoDB."
                link="https://toy-emporium-d0aca.web.app/"
                type="Featured Project"
                img={toyEmporium}
                github="https://github.com/Sobuj54/module-73-toy-emporium-client-assignment-"></FeaturedProject>
            </div>

            <div className="col-span-6">
              {/* cars doctor */}
              <Projects
                title="Cars Doctor"
                summary="A web application showcasing different car services available. User can choose service according to their needs. This application was created using ReactJS, ContextAPI, Firebase, TailwindCSS, React Router. For server NodeJs, Express and MongoDB."
                link="https://cars-doctor-b3f71.web.app/"
                type="Featured Project"
                img={carsDoctor}
                github="https://github.com/Sobuj54/module-69-car-doctor-client"></Projects>
            </div>

            <div className="col-span-6">
              {/* volunteer network */}
              <Projects
                title="Volunteer Network"
                summary="A Volunteer Network web application showcasing different volunteer works. This application was created using ReactJS, ContextAPI, Firebase, TailwindCSS, React Router. For server NodeJs, Express and MongoDB."
                link="https://volunteer-network-d5cab.web.app/"
                type="Featured Project"
                img={volunteerNetwork}
                github="https://github.com/Sobuj54/module-72-volunteer-network-client"></Projects>
            </div>

            <div className="col-span-12">
              {/* Doc house */}
              <FeaturedProject
                title="Doc House"
                summary="A Dentist web application showcasing Doctors and available Services. This application was created using ReactJS, ContextAPI, Firebase, TailwindCSS, React Router. For server NodeJs, Express and MongoDB."
                link="https://doc-house-1030e.web.app/"
                type="Featured Project"
                img={docHouse}
                github="https://github.com/Sobuj54/module-76-doc-house-client-practice"></FeaturedProject>
            </div>

            <div className="col-span-6">
              {/* Chefs choice */}
              <Projects
                title="Chefs Choice"
                summary="A web application showcasing Arabian recipes and chef who can cook these recipes. This application was created using ReactJS, ContextAPI, Firebase, TailwindCSS, React Router. For server NodeJs, Express and MongoDB."
                link="https://chef-recipe-cuisine.web.app/"
                type="Featured Project"
                img={chefsChoice}
                github="https://github.com/Sobuj54/module-65-assignment-chef-recipe"></Projects>
            </div>

            <div className="col-span-6">
              {/* News Dragon */}
              <Projects
                title="News Dragon"
                summary="A News web application showcasing some daily news. These news data are not from dynamic api. This application was created using ReactJS, ContextAPI, Firebase, TailwindCSS, React Router. For server NodeJs, Express and MongoDB."
                link="https://the-news-dragon-6ca0a.web.app/categories/0"
                type="Featured Project"
                img={newsDragon}
                github="https://github.com/Sobuj54/module-62-the-news-dragon-responsive-react-site"></Projects>
            </div>

            <div className="col-span-12">
              {/* bistro boss */}
              <FeaturedProject
                title="Bistro Boss"
                summary="A Restaurant web application showcasing menu. Customers can book food.This application also has stripe payment system.This application was created using ReactJS, ContextAPI, Firebase, TailwindCSS, React Router. For server NodeJs, Express and MongoDB."
                link="https://bistro-boss-5e1ed.web.app/"
                type="Featured Project"
                img={bistroBoss}
                github="https://github.com/Sobuj54/module-74-bistro-boss-client"></FeaturedProject>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
