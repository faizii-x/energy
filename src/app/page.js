import React from "react";
import Landing from "./pages/landing";
import Compaigns from "./pages/compaign";
import Refferal from "./pages/refferal";
import Promotion from "./pages/promotion";
import Blog from "./pages/blog";
import Contact from "./pages/contact";


function page() {
  return (
    <>
      <Landing/>
      <Compaigns/>
      <Refferal/>
      <Promotion/>
      <Blog/>
      <Contact/>
    </>
  );
}

export default page;
