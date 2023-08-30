
import React from "react";
import Navbar from "../app/component/navbar";
import Anim from "../app/component/anim";
import CardHome from "../app/component/cardHome";
import ShortVid from "../app/component/shortVid";
import CardTab from "../app/component/cardTab";
import Images from "../app/component/images";
import Footer from "../app/component/footer";


function Landing() {
  return (
    <>
      <Navbar />
      <Anim />
      <CardHome />
      <ShortVid />
      <CardTab />
      <Images />
      <Footer />
      
    </>
  );
}

export default Landing;
