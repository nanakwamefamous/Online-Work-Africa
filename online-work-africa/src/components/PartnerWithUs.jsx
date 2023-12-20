import React from 'react'
import "../styles/PartnerWithUs.css";
import PartnerWithUsImage from "../images/hand shake.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function PartnerWithUs() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (

    <div data-aos="fade-down" className="pwucontent-container">
      <div data-aos="zoom-in" className="pwutext-container">
        <h2>PARTNER WITH US</h2>
        <p>
        This Virtual Conference will create a platform for both knowledge sharers and knowledge seekers to connect and learn to build, empower, upskill and reskill human resources in the area of digital knowledge across Africa. The focus is to build the capacity of the youth, SMEs, government agencies, organizations, and professionals to make them more competitive on the job market, more efficient in their fields of work, and equip them to apply digital skills to solve problems.
        </p>
      </div>

      <div className="pwuimage-container">
        <img
          src={PartnerWithUsImage}
          alt="Sample"
        />
      </div>

      <a className="pwubottom-left-btn" href='/About us'>SIGN UP</a>
    </div>

  // <div>
  //   <div className='pwuBigBox'>
  //     <div className='wrapper'>
  //       <img src={PartnerWithUsImage} alt='' className='PartnerWithUsimg'/>
  //       <div className='pwutext-box'>
  //         <h2>PARTNER WITH US</h2>
  //         <p>
  //           fjhvj  udf uyfcd dguv ouydf   vbjvgv fvyjag vuv dvuyg vvgv vvga afyuvv sjvvivg avihv fhkdfv vugiolhvhpv vuigvininv biufdafdvfa fuvahvvkvcn,b k  jvbkygh yghivbvc vusvids vubhsnbhvndc scuxhbnvcbx vchbfbdc kbnjchbfnj fhbvhcjvhbc gvhbhb  dhj dhjifvhbcctfydytfgkydtfgyidt divjftiutsgchiyserdxfcgh yhuhtgcvfjchvbhphlr irt ttgdyhpyh;phkyytsfs yrfhfiyfhvkgoljlokutokgdeyft4fxfih  fyikvfugjyi hlgyiugfytufhotufh fjyrifypgv jhiutghugj yhfitgj iiutigjb guihtiufhvnnm gifhvjyuchj,m mgjygchb 
  //         </p>
  //         <div className='pwubox'><a href='/Sponsors' className='pwuReadMore'>Sign Up</a></div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  )
}