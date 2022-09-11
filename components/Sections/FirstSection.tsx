import type { NextPage } from "next";
import Typewriter from "typewriter-effect";

const FirstSection: NextPage = () => {
  return (
    <div className="w-80 md:w-96 flex flex-col items-center justify-center text-center text-2xl text-white font-ubuntu h-screen rounded-md bg-gradient-to-r from-[#01A2E4] to-[#12B699] hover:scale-105 transition-all">
      <Typewriter
        options={{
          strings: ["@_itx__asim__07_", "Asim"],
          autoStart: true,
          loop: true,
        }}
      />
      <h1 className="text-sm p-2 opacity-90">Student from India.</h1>
    </div>
  );
};

export default FirstSection;
