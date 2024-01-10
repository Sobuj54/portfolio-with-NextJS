import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";
import SkillDetails from "@/components/SkillDetails";
import Link from "next/link";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title>Sobuj | About</title>
        <meta name="description" content="about me" />
      </Head>

      <TransitionEffect></TransitionEffect>

      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="About Me"
            className="text-center mb-16 xl:!text-5xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl"
          />
          <div className="w-full">
            <div className="flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 sm:mt-6 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                👋 Hello, I'm Sobuj Ahmed, a passionate Full Stack Web Developer
                with a strong drive to create engaging and dynamic web
                applications. While my journey into the world of web development
                may have started with zero experience, my determination and
                commitment have propelled me forward, allowing me to immerse
                myself in the exciting world of technology.
              </p>

              <p className="font-medium my-4">
                🚀 My journey into web development began as a curious individual
                with a thirst for knowledge. I embarked on this path with a deep
                desire to craft beautiful and functional digital experiences.
                The MERN stack (MongoDB, Express, React, Node.js) immediately
                caught my attention due to its versatility and popularity in the
                industry. I was captivated by the idea of building robust and
                scalable web applications using these cutting-edge technologies.
              </p>
              <p className="font-medium">
                🌟 I am thrilled to embark on this journey as a full stack web
                developer, and I look forward to the exciting challenges and
                opportunities that lie ahead. Thank you for visiting my
                portfolio, and I invite you to explore my projects to witness
                the results of my dedication and passion for web development.
              </p>
              <p className="font-medium mt-4">
                Let's{" "}
                <Link
                  href="/contact"
                  className="text-primary dark:text-primaryDark underline">
                  connect
                </Link>{" "}
                and build something incredible together!
              </p>
            </div>
          </div>
          {/* animating numbers */}
          <div className="flex justify-between items-center xl:flex-row xl:items-center md:flex-col md:gap-7 mt-44 md:mt-20">
            <div className="flex flex-col items-end justify-center gap-2 xl:items-center border-2 border-dark dark:border-light rounded-xl py-7 px-14 border-r-8 border-b-8">
              <span className="text-7xl font-bold inline-block md:text-5xl sm:text-4xl">
                <AnimatedNumbers value={7}></AnimatedNumbers>+
              </span>
              <h2 className="font-medium text-xl text-dark/75 capitalize dark:text-light xl:text-center md:text-lg sm:text-base">
                Completed Projects
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center gap-2 xl:items-center  border-2 border-dark rounded-xl py-7 px-14 dark:border-light  border-r-8 border-b-8">
              <span className="text-7xl font-bold inline-block md:text-5xl sm:text-4xl">
                0+
              </span>
              <h2 className="font-medium text-xl text-dark/75 capitalize dark:text-light xl:text-center md:text-lg sm:text-base">
                Years of Experience
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center gap-2 xl:items-center  border-2 border-dark rounded-xl py-7 px-14 dark:border-light border-r-8 border-b-8">
              <span className="text-7xl font-bold inline-block md:text-5xl sm:text-4xl">
                0+
              </span>
              <h2 className="font-medium text-xl text-dark/75 capitalize dark:text-light xl:text-center md:text-lg sm:text-base">
                Satisfied Customers
              </h2>
            </div>
          </div>
          <Skills></Skills>
          <SkillDetails></SkillDetails>
        </Layout>
      </main>
    </>
  );
};

export default About;
