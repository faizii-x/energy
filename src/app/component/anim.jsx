import Hero from "../../../public/assets/png/hero.png";
import Image from "next/image";


function Anim() {
  return (
    <>
      <div className="relative">
      <Image className="animate-blob w-[87%] mt-4 container mx-auto" src={Hero} />
       
        <p className="text-[16px] md:text-[20px] text-center  font-poppins font-semibold absolute -mt-[120px] md:-mt-[190px] lg:-mt-[270px] ml-[50px] md:ml-[100px] lg:ml-[200px]">
          Enter your Zip Code to see prices
        </p>
        <div className="flex justify-center absolute -mt-[100px] md:-mt-[170px] lg:-mt-[250px] ml-[50px] md:ml-[100px] lg:ml-[200px]">
          <div>
            <input
              type="text"
              placeholder="ZIP CODE"
              className="mt-6 w-[100%] h-[45px] md:h-[60px] rounded-2xl pl-6 mb-16"
            />
          </div>
          <div>
            <button className="animate-bounce mt-[27px] rounded-lg bg-green-500 w-[90px] h-[40px] md:h-[54px] -ml-[60px] text-[16px] font-poppins font-medium">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Anim;
