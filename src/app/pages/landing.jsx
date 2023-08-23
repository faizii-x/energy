import React from 'react'
import Navbar from '../component/navbar'
import Anim from '../component/anim'
import CardHome from '../component/cardHome'
import ShortVid from '../component/shortVid'
import CardTab from '../component/cardTab'
import Images from '../component/images'
import Footer from '../component/footer'

function Landing() {
  return (
   <>
   
   <Navbar/>
   <Anim/>
   <CardHome/>
   <ShortVid/>
   <CardTab/>
   <Images/>
   <Footer/>
   </>
  )
}

export default Landing