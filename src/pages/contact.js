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
          <section className=" bg-gray-100 dark:bg-dark">
            <div className="px-4 mx-auto sm:px-0 lg:px-4 max-w-7xl ">
              <div className="max-w-full mx-auto text-center">
                <AnimatedText
                  text="Contact Me"
                  className="text-center sm:!text-4xl"></AnimatedText>
              </div>

              <div className="w-full mx-auto sm:mt-12 mt-16 ">
                <div className="grid md:grid-cols-1  gap-6 md:px-0 text-center px-0 grid-cols-3">
                  <div className="bg-white dark:bg-dark rounded-xl dark:text-light">
                    <div className="p-6 md:p-1 border border-dark border-r-8 border-b-8 rounded-xl dark:border-light">
                      <svg
                        className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400 dark:text-light"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <p className="mt-6 text-lg font-medium text-gray-900 dark:text-light">
                        01631 058947
                      </p>
                      <p className="mt-1 text-lg font-medium text-gray-900 dark:text-light">
                        01776 635061
                      </p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-dark rounded-xl border border-dark border-r-8 border-b-8 dark:border-light">
                    <div className="p-6">
                      <svg
                        className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400 dark:text-light"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="mt-6 text-lg font-medium text-gray-900 dark:text-light">
                        sobujahmed124@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="border border-dark border-r-8 border-b-8 bg-white dark:bg-dark rounded-xl dark:border-light">
                    <div className="p-6">
                      <svg
                        className="flex-shrink-0 w-10 h-10 mx-auto text-gray-400 dark:text-light"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <p className="mt-6 text-lg font-medium leading-relaxed text-gray-900 dark:text-light">
                        Matuail, Jatrabari, Dhaka
                      </p>
                    </div>
                  </div>
                </div>

                <div className="md:mt-6 mt-10 overflow-hidden bg-white dark:bg-dark rounded-xl border-2 border-dark border-r-[13px] border-b-[13px] dark:border-light">
                  <div className="md:px-1 px-6 py-12 ">
                    <AnimatedText
                      text="Send Me An Email"
                      className="text-center md:!text-3xl !text-4xl"></AnimatedText>

                    <form action="#" method="POST" className="mt-14 md:p-4">
                      <div className="grid md:grid-cols-1 grid-cols-2 gap-x-5 gap-y-4">
                        <div className="md:col-span-2 ">
                          <label className="text-base font-medium text-gray-900 dark:dark:text-light">
                            Your name
                          </label>
                          <div className="mt-2.5 relative">
                            <input
                              type="text"
                              name="name"
                              id=""
                              placeholder="Enter your full name"
                              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                            />
                          </div>
                        </div>

                        <div className="md:col-span-2">
                          <label className="text-base font-medium text-gray-900 dark:text-light">
                            Email address
                          </label>
                          <div className="mt-2.5 relative">
                            <input
                              type="email"
                              name="email"
                              id=""
                              placeholder="Enter your email address"
                              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                            />
                          </div>
                        </div>

                        <div className="md:col-span-2">
                          <label className="text-base font-medium text-gray-900 dark:text-light">
                            Phone number
                          </label>
                          <div className="mt-2.5 relative">
                            <input
                              type="tel"
                              name="phone"
                              id=""
                              placeholder="Enter your phone number"
                              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                            />
                          </div>
                        </div>

                        <div className="md:col-span-2">
                          <label className="text-base font-medium text-gray-900 dark:text-light">
                            Company name
                          </label>
                          <div className="mt-2.5 relative">
                            <input
                              type="text"
                              name="company"
                              id=""
                              placeholder="Enter your company name"
                              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                            />
                          </div>
                        </div>

                        <div className="col-span-2">
                          <label className="text-base font-medium text-gray-900 dark:text-light">
                            Message
                          </label>
                          <div className="mt-2.5 relative">
                            <textarea
                              name="message"
                              id=""
                              placeholder="Leave a message"
                              className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                              rows="4"></textarea>
                          </div>
                        </div>

                        <div className="col-span-2">
                          <button
                            type="submit"
                            className="flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-dark  rounded-md border-2 border-dark hover:bg-light hover:text-dark hover:border-2 hover:border-solid dark:text-dark dark:bg-light dark:hover:bg-dark dark:hover:border-light dark:hover:text-light">
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      </main>
    </>
  );
};

export default contact;
