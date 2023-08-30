"use client";
import Logo from "../../../public/assets/png/logo.png";
import Image from "next/image";
import { useState } from "react";
import Drawer from "./drawer";
import Link from "next/link";
import Headroom from "react-headroom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOnClose = () => setOpen(false);

  const [isHovered, setIsHovered] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleEnter = () => {
    setIsShow(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleLeave = () => {
    setIsShow(false);
  };

  return (
    <>
      <Headroom>
        <div className="bg-[#445069] h-[85px]">
          <header className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 container  mx-auto">
            <div className="col-span-2 self-center">
              <Link href="/">
                <Image className="cursor-pointer w-[100%]" src={Logo} />
              </Link>
            </div>

            <div className="col-span-8 hidden lg:block">
              <div className="flex justify-center gap-10  mt-9">
                <Link href="/">
                  <h2 className="text-white font-poppins  hover:text-green-500">
                    Home
                  </h2>
                </Link>

                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex justify-start gap-1 cursor-pointer">
                    <h2 className="text-white font-poppins hover:text-green-500">
                      Compaigns
                    </h2>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-white mt-[5px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>

                  {isHovered && (
                    <div className="absolute bg-white rounded-md shadow-lg p-8 w-[260px] mt-1">
                      <h1 className="text-[20px] font-bold font-poppins">
                        Services
                      </h1>
                      <h2 className="text-[17px] font-medium font-poppins mt-5 cursor-pointer hover:text-green-500">
                        Electricity Supply
                      </h2>
                      <h2 className="text-[17px] font-medium font-poppins mt-2 cursor-pointer hover:text-green-500">
                        Energy Efficiency
                      </h2>
                      <h2 className="text-[17px] font-medium font-poppins mt-2 cursor-pointer hover:text-green-500">
                        Natural Gas Supplier
                      </h2>
                      <h2 className="text-[17px] font-medium font-poppins mt-2 cursor-pointer hover:text-green-500">
                        Solar
                      </h2>
                    </div>
                  )}
                </div>

                <Link href="/refferal">
                  <div className="flex justify-start gap-1">
                    <h2 className="text-white font-poppins hover:text-green-500">
                      About Us
                    </h2>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-white mt-[5px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg> */}
                  </div>
                </Link>

                <div
                  className="relative"
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                >
                  <div className="flex justify-start gap-1 cursor-pointer">
                    <h2 className="text-white font-poppins hover:text-green-500">
                      Resources
                    </h2>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-white mt-[5px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>

                  {isShow && (
                    <div className="absolute bg-white rounded-md shadow-lg p-8 w-[260px] mt-1">
                      <h1 className="text-[20px] font-bold font-poppins">
                        Resources
                      </h1>
                      <h2 className="text-[17px] font-medium font-poppins mt-5 cursor-pointer hover:text-green-500">
                        Blogs
                      </h2>
                      <h2 className="text-[17px] font-medium font-poppins mt-2 cursor-pointer hover:text-green-500">
                        Careers
                      </h2>
                      <h2 className="text-[17px] font-medium font-poppins mt-2 cursor-pointer hover:text-green-500">
                        Our Partners
                      </h2>
                      <h2 className="text-[17px] font-medium font-poppins mt-2 cursor-pointer hover:text-green-500">
                        Our Suppliers
                      </h2>
                    </div>
                  )}
                </div>

                <Link href="/contact">
                  <h2 className="text-white font-poppins hover:text-green-500">
                    Contact Us
                  </h2>
                </Link>
              </div>
            </div>

            <div className="col-span-2 mt-4 flex justify-center">
              <button className="border border-[white] hidden lg:block text-white rounded-md w-[110px] h-[55px] hover:bg-[white] hover:text-[#5101A0] p-3">
                Sign Up
              </button>
            </div>

            <div className="col-span-10 -mt-24 mr-4 flex lg:hidden justify-end">
              <svg
                onClick={() => setOpen(true)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 self-center z-90 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>

            <Drawer open={open} setOpen={handleOnClose} />
          </header>
        </div>
      </Headroom>
    </>
  );
}

export default Navbar;
