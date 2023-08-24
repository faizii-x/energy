"use client"
import Bluebulb from "../../../public/assets/png/bluebulb.jpg";
import Greenbulb from "../../../public/assets/png/greenbulb.webp";
import Electrician from "../../../public/assets/png/electrician.jpg";
import Gas from "../../../public/assets/png/gas.jpg";
import ManLight from "../../../public/assets/png/manlight.jpg";
import Image from "next/image";
import { useState, useEffect } from "react";

function Images() {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
       <div
      className={`fixed bottom-6 right-6 ${
        isVisible ? 'block' : 'hidden'
      }`}
    >
      <button
        onClick={scrollToTop}
        className="bg-green-500 p-2 rounded-full text-white animate-bounce"
      >
        <div className="h-6 w-6" >↑</div>
      </button>
    </div>
     

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 container mx-auto p-6">
        <div>
          <Image
            className="rounded-md w-full h-[420px] md:block hidden bg-cover bg-no-repeat"
            src={Bluebulb}
          />
         
        </div>
        <div>
          <Image
            className="rounded-md w-full h-[420px] md:block hidden bg-no-repeat bg-contain"
            src={Greenbulb}
          />

          
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 container -mt-10 mb-16 mx-auto p-6">
        <div>
          <Image className="rounded-md w-full h-[450px]" src={Electrician} />

        </div>
        <div>
          <Image className="rounded-md w-full h-[450px]" src={Gas} />

        </div>
        <div>
          <Image className="rounded-md w-full h-[450px]" src={ManLight} />

        
        </div>
      </div>
    </>
  );
}

export default Images;
