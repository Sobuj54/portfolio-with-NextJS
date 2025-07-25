import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/Untitled design.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sobuj | Home</title>
        <meta name="Home" content="Landing page of Sobuj portfolio" />
      </Head>

      <TransitionEffect></TransitionEffect>

      <main className="flex items-center w-full min-h-screen text-dark dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            {/* image container */}
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="sobuj"
                className="w-[92%] h-auto rounded-lg lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            {/* text in home */}
            <div className="flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code ."
                className="xl:!text-5xl lg:!text-center lg:!text-5xl leading-[70px] md:leading-none sm:mt-7 md:!text-4xl sm:!text-3xl"
              ></AnimatedText>
              <p className="my-4 text-base font-medium md:text-md sm:text-sm">
                As a full-stack developer, I am dedicated to turning ideas into
                innovative web applications. Explore my latest{" "}
                <Link
                  href="/projects"
                  className="underline text-primary dark:text-primaryDark underline-offset-4"
                >
                  projects{" "}
                </Link>
                showcasing my expertise in React.js and web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/sobuj_ahmed.pdf"
                  target="_blank"
                  className="flex items-center bg-gray-950 text-light p-2.5 px-5 rounded-lg font-semibold text-lg hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className="!w-6 ml-1"></LinkArrow>
                </Link>
                <Link
                  href="/contact"
                  className="ml-4 font-medium capitalize border-2 border-dark text-lg text-dark underline underline-offset-4 hover:bg-dark hover:text-light p-2.5 px-7 rounded-lg dark:text-light dark:border dark:border-light hover:dark:bg-light hover:dark:text-dark md:p-2.5 md:px-5 md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe></HireMe>
        <div className="absolute w-24 right-8 bottom-8 md:hidden">
          <Image
            src={lightBulb}
            alt="lightBulb"
            className="w-full h-auto"
          ></Image>
        </div>
      </main>
    </>
  );
}
