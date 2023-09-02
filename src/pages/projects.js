import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { GithubIcon } from "@/components/icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import featuredProject from "../../public/images/projects/Toy Emporium.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12">
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
          <Link href={github} target="_blank" className="w-10">
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
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                title="Toy Emporium"
                summary="A toy store web application showcasing car toys. This application was created using ReactJS, ContextAPI, Firebase, TailwindCSS, React Router. For server NodeJs, Express and MongoDB."
                link="https://toy-emporium-d0aca.web.app/"
                type="Featured Project"
                img={featuredProject}
                github="https://github.com/Sobuj54/module-73-toy-emporium-client-assignment-"></FeaturedProject>
            </div>
            <div className="col-span-6">project-1</div>
            <div className="col-span-6">project-2</div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
