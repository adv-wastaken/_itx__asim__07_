import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="shadow-sm bg-[#0A0C1B] fixed w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-5 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <Link href="/">
                  <img
                    className="h-10 w-auto pr-2"
                    src="/logo.png"
                    alt="logo"
                  />
                </Link>
                <Link href="/">
                  <h1 className="font-ubuntu font-bold text-[#00FFFF]">
                    _itx__asim__07_
                  </h1>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-5 flex items-center space-x-4">
                  <Link href="/">
                    <h1 className="cursor-pointer text-[#00FFFF] px-3 py-2 rounded-2xl text-sm outline outline-1 outline-cyan-300 font-medium">
                      Home
                    </h1>
                  </Link>
                  <Link href="/about">
                    <h1 className="cursor-pointer text-[#00FFFF] px-3 py-2 rounded-2xl text-sm outline outline-1 outline-cyan-300 font-medium">
                      About
                    </h1>
                  </Link>
                  <Link href="https://github.com/adv-wastaken/Asim">
                    <h1 className="cursor-pointer text-[#00FFFF] px-3 py-2 rounded-full text-sm outline outline-1 outline-cyan-300 font-medium">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-github"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </h1>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    height="30"
                    width="30"
                    viewBox="0 0 26 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
                      fill="#00FFFF"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block"
                    height="30"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#111"
                    viewBox="0 0 24 24"
                    stroke="#00FFFF"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="bg-[#0A0C1B] px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <Link href="/">
                  <h1 className="cursor-pointer text-[#00FFFF] block px-3 py-2 rounded-md text-base font-medium hover:underline">
                    Home
                  </h1>
                </Link>
                <Link href="/about">
                  <h1 className="cursor-pointer text-[#00FFFF]  block px-3 py-2 rounded-md text-base font-medium hover:underline">
                    About
                  </h1>
                </Link>
                <Link href="https://github.com/adv-wastaken/Asim">
                  <h1 className="cursor-pointer text-[#00FFFF]  block px-3 py-2 rounded-md text-base font-medium hover:underline">
                    Github
                  </h1>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Header;
