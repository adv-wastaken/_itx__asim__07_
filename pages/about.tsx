import type { NextPage } from "next";
import Head from "next/head";
import AboutText from "../components/AboutText";

const about: NextPage = () => {
  return (
    <div className="h-screen  pt-32 py-16 flex flex-col items-center justify-center text-center">
      <Head>
        <title>Asim - About</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <h1 className="text-2xl font-ubuntu text-[#00ffff]">About me</h1>
      <AboutText />
    </div>
  );
};

export default about;
