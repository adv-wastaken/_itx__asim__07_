import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <div className="bg-[#0A0C1B]">
      <div className="h-52 flex">
        <div className="w-1/2 md:w-3/5 h-full flex flex-col">
          <div className="h-1/2 w-full p-5">
            <h1 className="text-xl text-[#00ffff] font-ubuntu font-medium pb-2">
              Email
            </h1>
            <h1 className="text-xs text-[#C0C0C0]">xxx@gmail.com</h1>
          </div>
          <div className="h-1/2 w-full p-5">
            <h1 className="text-xl text-[#00ffff] font-ubuntu font-medium pb-2">
              Location
            </h1>
            <h1 className="text-xs text-[#C0C0C0]">India</h1>
          </div>
        </div>
        <div className="w-1/2 md:w-2/5 h-full p-5 flex flex-col">
          <h1 className="text-xl text-[#00ffff] font-ubuntu font-medium">
            Socials
          </h1>
          <Link href="https://github.com/advwastaken">
            <h1 className="text-xs text-[#C0C0C0] py-2">Whatsapp</h1>
          </Link>
          <Link href="https://www.instagram.com/_itx__asim__07_/">
            <h1 className="text-xs text-[#C0C0C0] pb-2">Instagram</h1>
          </Link>
          <Link href="https://open.spotify.com/user/31kwbbvuwc6jwlvs7wgcedu5owti?si=H5-sQ59GR1ino5_5dCUDDg&utm_source=copy-link">
            <h1 className="text-xs text-[#C0C0C0]">Spotify</h1>
          </Link>
        </div>
      </div>
      <div className="h-10 w-full flex text-center items-center justify-center">
        <h1 className="text-md text-[#C0C0C0] font-ubuntu p-2">©Asim 2022</h1>
      </div>
    </div>
  );
};

export default Footer;
