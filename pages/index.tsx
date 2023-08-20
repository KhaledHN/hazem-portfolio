import Head from "next/head";
import { Inter } from "next/font/google";
import Main from "../components/Main"
import About from "../components/About";
import Contact from "../components/Contact";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Khaled Hazem | Front-End Developer</title>
        <link rel="icon" href="/assets/navLgo.png" />
      </Head>
      <Main />
      <About />
      <Contact />
    </div>
  );
}
