import React from 'react'
import "../styles/Sponsors.css"
import sponsorsimg from '../images/Slider 5.png'
import PartnerWithUs from '../components/PartnerWithUs';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Sponsors() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div>
      <div className='sptopimgBox'>
        <div className='sptopimg'></div>
        <h4 data-aos="zoom-in" className='sph1text'>SPONSORS</h4>
        <div data-aos="fade-left" className='spline'></div>
        <div className='sponsorsimgbox'>
          <div className='spimg'>
            <img data-aos="zoom-in" src={sponsorsimg} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg} alt="" />
            <img data-aos="zoom-in" src={sponsorsimg} alt="" />
          </div>
        </div>
        <PartnerWithUs />
      </div>
    </div>
  )
}