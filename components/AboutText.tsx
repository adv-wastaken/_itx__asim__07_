import type { NextPage } from "next";

const AboutText: NextPage = () => {
  return (
    <div className="w-full p-10 md:px-32 rounded">
      <h1 className="text-lg font-ubuntu text-[#F2F3F4]">
        I'm an Indian, currently in High School. I've been coding for around a
        descent amount of time. <br />
        Fun Fact: I like{" "}
        <span className="bg-gradient-to-r from-[#01A2E4] to-[#12B699] py-0.8 px-1 rounded">
          to listen Songs.
        </span>
      </h1>
    </div>
  );
};

export default AboutText;
