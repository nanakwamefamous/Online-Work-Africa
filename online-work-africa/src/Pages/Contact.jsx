import React from 'react'
import "../styles/Contact.css"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


export default function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div>
        <div className='ctopimg'></div>
        <h4 data-aos="zoom-in" className='ch1text'>CONTACT US</h4>
        <div className='cline'></div>
      <div data-aos="fade-left" className='contactBox'>
        <section data-aos="zoom-in" className='phone'>
          <i class="fa-solid fa-phone-volume 2px"> PHONE</i>
          <h1>00000000000</h1>
        </section>
        <section data-aos="zoom-in" className='email'>
          <i class="fa-solid fa-envelope 2px"> EMAIL</i>
          <h1>fdmbjfdkfk@gmail.com</h1>
        </section>
        <section data-aos="zoom-in" className='address'>
          <i class="fa-solid fa-paper-plane 2px"> ADDRESS</i>
          <h1>vhbnmdjhb dfdufgdk</h1>
        </section >
        <div data-aos="zoom-in" className="socialMedia">
          <h1> SOCIAL MEDIA</h1>
          <i data-aos="zoom-in" class="fa-brands fa-facebook fa-2x"></i>
          <i data-aos="zoom-in" class="fa-brands fa-twitter fa-2x"></i>
          <i data-aos="zoom-in" class="fa-brands fa-instagram fa-2x"></i>
          <i data-aos="zoom-in" class="fa-brands fa-linkedin-in fa-2x"></i>
        </div>
      </div>
    </div>
  )
}