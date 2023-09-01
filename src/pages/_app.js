import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
// this is a must to use font with next js and tailwind
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
        <NavBar></NavBar>
        {/* this Component and {...pageProps} are necessary for page routing  it acts like out <Outlet/> component of react router*/}
        <Component {...pageProps} />
        <Footer></Footer>
      </main>
    </>
  );
}
