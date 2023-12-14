import React from 'react'
import "../styles/PartnerWithUs.css";
import PartnerWithUsImage from "../images/imagesAboutUs.png"

export default function PartnerWithUs() {
  return (

    <div className="pwucontent-container">
      <div className="pwutext-container">
        <h2>PARTNER WITH US</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          quam vel lectus posuere vestibulum. Integer volutpat, turpis eget
          efficitur fermentum, sem erat ultrices urna, id varius velit ligula
          non velit.
        </p>
      </div>

      <div className="pwuimage-container">
        <img
          src={PartnerWithUsImage}
          alt="Sample"
        />
      </div>

      <a className="pwubottom-left-btn" href='/About us'>READ MORE</a>
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