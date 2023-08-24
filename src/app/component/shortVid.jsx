import Image from "next/image";
import One from "../../../public/assets/png/one.gif";
import Two from "../../../public/assets/png/two.gif";
import Three from "../../../public/assets/png/three.gif";

function ShortVid() {
  return (
    <>

    <h1 className="text-[20px] font-poppins font-semibold text-center mt-24">How do I sign up with a supplier?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 p-16 container mx-auto" >
        <div className="mx-auto">
        <Image className="rounded-md" src={One} />
        <p className="text-center text-[16px] text-[#5E626C] p-2 font-poppins font-light mt-2 pb-12">Enter Your Zip <br/> Code</p>
        </div>
        <div className="mx-auto">
        <Image className="rounded-md" src={Two} />
        <p className="text-center text-[16px] text-[#5E626C] p-2 font-poppins font-light mt-2 pb-12">Filter and <br/> Compare Plans</p>
        </div>
        <div className="mx-auto">
        <Image className="rounded-md" src={Three} />
        <p className="text-center text-[16px] text-[#5E626C] p-2 font-poppins font-light mt-2 pb-12 ">Order the Plan<br/> That's Right for<br/> You</p>
        </div>
      </div>
    
    </>
  );
}

export default ShortVid;
