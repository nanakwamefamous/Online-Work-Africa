import React from 'react'
import "../styles/AboutUsBox.css";
import aboutImage from "../images/imagesAboutUs.png"

export default function AboutUsBox() {
  return (
  <div>
    <div className='auBigBox'>
      <div className='wrapper'>
        <img src={aboutImage} alt='' className='aboutimg'/>
        <div className='autext-box'>
          <h2>ABOUT US</h2>
          <p>
            fjhvj  udf uyfcd dguv ouydf   vbjvgv fvyjag vuv dvuyg vvgv vvga afyuvv sjvvivg avihv fhkdfv vugiolhvhpv vuigvininv biufdafdvfa fuvahvvkvcn,b k  jvbkygh yghivbvc vusvids vubhsnbhvndc scuxhbnvcbx vchbfbdc kbnjchbfnj fhbvhcjvhbc gvhbhb  dhj dhjifvhbcctfydytfgkydtfgyidt divjftiutsgchiyserdxfcgh yhuhtgcvfjchvbhphlr irt ttgdyhpyh;phkyytsfs yrfhfiyfhvkgoljlokutokgdeyft4fxfih  fyikvfugjyi hlgyiugfytufhotufh fjyrifypgv jhiutghugj yhfitgj iiutigjb guihtiufhvnnm gifhvjyuchj,m mgjygchb 
          </p>
          <div className='aubox'><a href='/About us' className='auReadMore'>Read more</a></div>
        </div>
      </div>
    </div>
  </div>
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