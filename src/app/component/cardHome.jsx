import { CARDS_HOME } from "../data";
import Image from "next/image";


function CardHome() {
  return (
    <>
      <div className="bg-[#] lg:mt-24 mt-2">
        <h1 className="text-[40px] font-poppins font-semibold text-center p-8 " >
         Features
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative gap-4 container mx-auto p-6 pb-16">
          {CARDS_HOME.map((x) => (
            <>
              <div className="shadow-2xl rounded-md">
              <Image className="mx-auto " src={x.img} />
                
                <h2 className="text-[22px] font-poppins font-semibold text-center mt-8">
                  {x.title}
                </h2>
                <p className="animate-pulse text-[16px] text-[#5E626C] p-2 font-poppins font-light mt-3 pb-12 text-center">
                  {x.des}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardHome;
