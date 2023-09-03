import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import React from "react";

const contact = () => {
  return (
    <>
      <Head>
        <title>Sobuj | Contact</title>
        <meta name="description" content="contact me" />
      </Head>
      <TransitionEffect></TransitionEffect>
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Contact Me"
            className="text-center"></AnimatedText>
        </Layout>
      </main>
    </>
  );
};

export default contact;
