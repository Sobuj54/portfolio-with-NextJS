import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/sobuj1.jpg";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";

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
      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="About Me" className="text-center mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I'm Sobuj Ahmed, a web developer with a passion for creating
                beautiful, functional, and user-centered digital experiences. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="font-medium my-4">
                I believe that development is about more than just making things
                look pretty – it's about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I'm working on a website, or other digital product, I
                bring my commitment to design excellence and user-centered
                thinking to every project I work on. I look forward to the
                opportunity to bring my skills and passion to your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                className="w-full h-auto rounded-2xl"
                src={profilePic}
                alt="profile"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"></Image>
            </div>

            {/* animating numbers */}
            <div className="col-span-2 flex flex-col justify-between items-end">
              <div className="flex flex-col items-end justify-center">
                <span className="text-7xl font-bold inline-block">
                  <AnimatedNumbers value={7}></AnimatedNumbers>+
                </span>
                <h2 className="font-medium text-xl text-dark/75 capitalize dark:text-light">
                  Completed Projects
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="text-7xl font-bold inline-block">0+</span>
                <h2 className="font-medium text-xl text-dark/75 capitalize dark:text-light">
                  Years of Experience
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="text-7xl font-bold inline-block">0+</span>
                <h2 className="font-medium text-xl text-dark/75 capitalize dark:text-light">
                  Satisfied Customers
                </h2>
              </div>
            </div>
          </div>
          <Skills></Skills>
        </Layout>
      </main>
    </>
  );
};

export default About;
