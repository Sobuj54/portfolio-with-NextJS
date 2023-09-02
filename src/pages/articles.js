import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 border border-solid w-full p-4 bg-light border-dark rounded-2xl">
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}></FramerImage>
      </Link>

      <Link href={link} alt={title} target="_blank">
        <h2 className="capitalize my-2 text-2xl font-bold hover:underline underline-offset-2">
          {title}
        </h2>
      </Link>

      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Sobuj | Articles</title>
        <meta name="description" content="articles" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change The World!"
            className="text-center mb-16"></AnimatedText>
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="15 min read"
              link="/"
              img={article1}></FeaturedArticle>

            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from scratch.Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="15 min read"
              link="/"
              img={article2}></FeaturedArticle>
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
