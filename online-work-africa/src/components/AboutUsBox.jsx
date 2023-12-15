import React from 'react'
import "../styles/AboutUsBox.css";
import aboutImg from "../images/imagesAboutUs.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AboutUsBox() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (

    <div data-aos="fade-up" className="aucontent-container">
      <div data-aos="zoom-in" className="autext-container">
        <h2>ABOUT US</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          quam vel lectus posuere vestibulum. Integer volutpat, turpis eget
          efficitur fermentum, sem erat ultrices urna, id varius velit ligula
          non velit.
        </p>
      </div>

      <div className="auimage-container">
        <img
          src={aboutImg}
          alt="Sample"
        />
      </div>

      <a className="aubottom-left-btn" href='/About us'>READ MORE</a>
    </div>

  // <div>
  //   <div className='auBigBox'>
  //     <div className='wrapper'>
  //       <img src={aboutImg} alt='' className='aboutimg'/>
  //       <div className='autext-box'>
  //         <h2>ABOUT US</h2>
  //         <p>
  //           fjhvj  udf uyfcd dguv ouydf   vbjvgv fvyjag vuv dvuyg vvgv vvga afyuvv sjvvivg avihv fhkdfv vugiolhvhpv vuigvininv biuf dafdvfa fuvahvvkvcn,b k  jvbkygh yghivbvc vusvids vubhsnbh vndc scuxhbnvcbx vchbfbdc kbnjchbfnj fhbvhcjvhbc gvhbhb  dhj dhjif vhbcctf ydytfg kydtfgyidt divjf tiutsg chiyse rdxfcgh yhuh tgcvfjch vbhphlr irt ttgdyhpyh;phkyytsfs yrfhfi yfhvkgol jlokut okgd eyft 4fxfih  fyikvfugjyi hlgyiug fytufhotufh fjyrifypgv jhiutghugj yhfitgj iiutigjb guih tiuf hvnnm gif hvjyuch j,m mgjygchb 
  //         </p>
  //         <div className='aubox'><a href='/About us' className='auReadMore'>Read more</a></div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  )
}


// <div className='BoxMain'>
// <div className="Box">
// <h1 className="AboutUs" >About us</h1>
// <img className="ImagesAboutUs1" src={aboutImage} alt='about'/>
// <section className='ContentBox'>
//   <p className="Content" >content will be added here </p>
// </section>
// <div className="ReadMoreBox"><a href='/About us' className='ReadMore'>Read more</a></div>
// </div>
// </div>