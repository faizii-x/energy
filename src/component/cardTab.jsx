import { TAB_CARDs } from "../app/data";
import Image from "next/image";
import Link from "next/link";


function CardTab() {
  return (
    <>
      <h2 className="text-[40px] font-poppins font-semibold text-center  p-8 ">
        Blogs
      </h2>
      <div className="bg-[]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
          {TAB_CARDs.map((x) => (
            <>
              <div className=" p-6 mb-12 ">
                <Image className="w-[400px] h-[270px]" src={x.img} />
                <h2 className="text-[22px] font-poppins font-medium mt-3">
                  {x.title}
                </h2>
                <p className="animate-pulse text-[16px] font-poppins font-light mt-3">
                  {x.des}
                </p>
                <Link href="/blog">
                <button className="border border-green-500 w-[130px] h-[50px] rounded-md mt-14 hover:animate-bounce hover:bg-green-500 hover:text-white">Load More</button>
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default CardTab;
