"use client";
import Logo from "../../../public/assets/png/logo.png";
import Image from "next/image";
import { useState } from "react";
import Drawer from "../component/drawer";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOnClose = () => setOpen(false);

  
  return (
    <>
      <div className="bg-[#445069]">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 container  mx-auto">
          <div className="col-span-2">
            <Image className="cursor-pointer w-[100%] h-[95px]" src={Logo} />
          </div>

          <div className="col-span-8 hidden lg:block">
            <div className="flex justify-center gap-10  mt-10">
              <Link href="/">
                <h2 className="text-white font-poppins hover:text-green-500">Home</h2>
              </Link>
              <Link href="/compaign">
                <h2 className="text-white font-poppins hover:text-green-500">Compaigns</h2>
              </Link>
              <Link href="/refferal">
                <h2 className="text-white font-poppins hover:text-green-500">Refferals</h2>
              </Link>
              <Link href="/promotion">
                <h2 className="text-white font-poppins hover:text-green-500">Promotions</h2>
              </Link>
              <Link href="/blog">
                <h2 className="text-white font-poppins hover:text-green-500">Blog</h2>
              </Link>
              <Link href="/contact">
                <h2 className="text-white font-poppins hover:text-green-500">Contact Us</h2>
              </Link>
            </div>
          </div>

          <div className="col-span-2 mt-5 flex justify-center">
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
        </div>
      </div>
    </>
  );
}

export default Navbar;
