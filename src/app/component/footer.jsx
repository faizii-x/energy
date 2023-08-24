import Logo from "../../../public/assets/png/logo.png";
import Fb from "../../../public/assets/png/fb.png";
import Twitt from "../../../public/assets/png/twitt.png";
import Youtube from "../../../public/assets/png/youtube.png";
import Linkedin from "../../../public/assets/png/linkedin.png";
import Image from "next/image";


function Footer() {
 
  return (
    <>
 

      <footer className="bg-[#445069] ">
        <div className=" w-3/4 flex justify-start mx-auto">
        <Image
            className="cursor-pointer md:w-[50%] lg:w-[25%] h-[100px] "
            src={Logo}
          />
          
        </div>
        <hr />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-3/4 p-10 container mx-auto">
          <div>
            <h1 className="text-[18px] text-white font-poppins font-semibold">Company</h1>
            <h2 className="text-[16px] text-white font-poppins font-light mt-5 hover:text-green-500 cursor-pointer">
              Home
            </h2>
            <h2 className="text-[16px] text-white font-poppins font-light mt-2 hover:text-green-500 cursor-pointer">
              Compaigns
            </h2>
            <h2 className="text-[16px] text-white font-poppins font-light mt-2 hover:text-green-500 cursor-pointer">
              Goals
            </h2>
            <h2 className="text-[16px] text-white font-poppins font-light mt-2 hover:text-green-500 cursor-pointer">
              Career
            </h2>
            <h2 className="text-[16px] text-white font-poppins font-light mt-2 hover:text-green-500 cursor-pointer">
              Contact Us
            </h2>
          </div>
          <div>
            <h1 className="text-[18px] text-white font-poppins font-semibold">Help</h1>

            <h2 className="text-[16px] text-white font-poppins font-light mt-5 hover:text-green-500 cursor-pointer">
              Conatct Us
            </h2>
            <h2 className="text-[16px] text-white font-poppins font-light mt-2 hover:text-green-500 cursor-pointer">
              How it Works
            </h2>
          </div>
          <div>
            <h1 className="text-[18px] text-white font-poppins font-semibold">
              Community
            </h1>
            <h2 className="text-[16px] text-white font-poppins font-light mt-5 hover:text-green-500 cursor-pointer">
              Conatct Us
            </h2>
            <h2 className="text-[16px] text-white mb-6 font-poppins font-light mt-2 hover:text-green-500 cursor-pointer">
              How it Works
            </h2>
          </div>
          <div className="flex md:justify-center lg:justify-end gap-4">
          <Image
            className="w-[50px] h-[50px] cursor-pointer"
            src={Fb}
          />
            <Image
            className="w-[50px] h-[50px] cursor-pointer"
            src={Twitt}
          />
            <Image
            className="w-[50px] h-[50px] cursor-pointer"
            src={Youtube}
          />
             <Image
            className="w-[50px] h-[50px] cursor-pointer"
            src={Linkedin}
          />
        </div>
        </div>

        <p className="text-center text-white text-[16px] font-poppins font-light pb-8">
          @2023 Copyrights Reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
