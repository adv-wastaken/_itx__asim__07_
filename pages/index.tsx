import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import FirstSection from "../components/Sections/FirstSection";

const Home: NextPage = () => {
  return (
    <div className="pt-32 py-16 h-auto w-full">
      <Head>
        <title>Asim</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className="w-full h-96 flex flex-col items-center">
        <FirstSection />
      </main>
    </div>
  );
};

export default Home;
