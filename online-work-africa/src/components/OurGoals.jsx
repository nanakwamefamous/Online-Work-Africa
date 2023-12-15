import React from 'react'
import "../styles/OurGoals.css";
import goalImage from "../images/goal.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function OurGoals() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (

    <div data-aos="fade-left" className="ogcontent-container">
      <div className="ogimage-container">
        <img
          src={goalImage}
          alt="Sample"
        />
      </div>
      <div data-aos="zoom-in" className="ogtext-container">
        <h2>Our Goals</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          quam vel lectus posuere vestibulum. Integer volutpat, turpis eget
          efficitur fermentum, sem erat ultrices urna, id varius velit ligula
          non velit.
        </p>
      </div>

      <a className="ogbottom-right-btn" href='/About us'>READ MORE</a>
    </div>

  // <div>
  //   <div className='ogbigBox'>
  //     <div className='wrapper'>
  //       <img src={goalImage} alt='' className='ourgoalsimg'/>
  //       <div className='ogtext-box'>
  //         <h2>Our Goals</h2>
  //         <p>
  //           fjhvj  udf uyfcd dguv ouydf   vbjvgv fvyjag vuv dvuyg vvgv vvga afyuvv sjvvivg avihv fhkdfv vugiolhvhpv vuigvininv biufdafdvfa fuvahvvkvcn,b k  jvbkygh yghivbvc vusvids vubhsnbhvndc scuxhbnvcbx vchbfbdc kbnjchbfnj fhbvhcjvhbc gvhbhb  dhj dhjifvhbcctfydytfgkydtfgyidt divjftiutsgchiyserdxfcgh yhuhtgcvfjchvbhphlr irt ttgdyhpyh;phkyytsfs yrfhfiyfhvkgoljlokutokgdeyft4fxfih  fyikvfugjyi hlgyiugfytufhotufh fjyrifypgv jhiutghugj yhfitgj iiutigjb guihtiufhvnnm gifhvjyuchj,m mgjygchb 
  //         </p>
  //         <div className='ogbox'><a href='/About us' className='ogReadMore'>Read more</a></div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  )
}