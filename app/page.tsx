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
        <title>Hazem Khaled</title>
        <link rel="icon" href="/assets/navLgo.png" />
        <meta name="msvalidate.01" content="1222E4F8F8FB6C0514814BA77F631931" />
      </Head>
      <Main />
      <About />
      <Contact />
    </div>
  );
}
