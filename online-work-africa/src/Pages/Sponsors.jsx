import React from 'react'
import "../styles/Sponsors.css"
import sponsorsimg from '../images/Slider 5.png'
import PartnerWithUs from '../components/PartnerWithUs';

export default function Sponsors() {
  return (
    <div>
      <div className='sptopimgBox'>
        <div className='sptopimg'></div>
        <h4 className='sph1text'>SPONSORS</h4>
        <div className='spline'></div>
        <div className='sponsorsimgbox'>
          <div className='spimg'>
            <img src={sponsorsimg} alt="" />
            <img src={sponsorsimg} alt="" />
            <img src={sponsorsimg} alt="" />
            <img src={sponsorsimg} alt="" />
            <img src={sponsorsimg} alt="" />
            <img src={sponsorsimg} alt="" />
            <img src={sponsorsimg} alt="" />
            <img src={sponsorsimg} alt="" />
            <img src={sponsorsimg} alt="" />
            <img src={sponsorsimg} alt="" />
            <img src={sponsorsimg} alt="" />
            <img src={sponsorsimg} alt="" />
            <img src={sponsorsimg} alt="" />
            <img src={sponsorsimg} alt="" />
            <img src={sponsorsimg} alt="" />
            <img src={sponsorsimg} alt="" />
          </div>
        </div>
        <PartnerWithUs />
      </div>
    </div>
  )
}