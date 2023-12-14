import React from 'react'
import "../styles/Contact.css"

export default function Contact() {
  return (
    <div>
        <div className='ctopimg'></div>
        <h4 className='ch1text'>CONTACT US</h4>
        <div className='cline'></div>
      <div className='contactBox'>
        <section className='phone'>
          <i class="fa-solid fa-phone-volume 2px"> PHONE</i>
          <h1>00000000000</h1>
        </section>
        <section className='email'>
          <i class="fa-solid fa-envelope 2px"> EMAIL</i>
          <h1>fdmbjfdkfk@gmail.com</h1>
        </section>
        <section className='address'>
          <i class="fa-solid fa-paper-plane 2px"> ADDRESS</i>
          <h1>vhbnmdjhb dfdufgdk</h1>
        </section>
        <div className="socialMedia">
          <h1> SOCIAL MEDIA</h1>
          <i class="fa-brands fa-facebook fa-2x"></i>
          <i class="fa-brands fa-twitter fa-2x"></i>
          <i class="fa-brands fa-instagram fa-2x"></i>
          <i class="fa-brands fa-linkedin-in fa-2x"></i>
        </div>
      </div>
    </div>
  )
}