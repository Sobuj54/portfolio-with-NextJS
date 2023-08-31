import "@/styles/globals.css";
// this is a must to use font with next js and tailwind
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} font-mont`}>
      <Component {...pageProps} />
    </main>
  );
}
