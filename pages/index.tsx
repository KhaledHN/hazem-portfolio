import Head from "next/head";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Khaled Hazem | Front-End Developer</title>
        <link rel="icon" href="/assets/navLgo.png" />
      </Head>
    </div>
  );
}
