import React from 'react';
import "../styles/EmploymentRate.css";
import Countup1 from './Countup1';
import Countup2 from './Countup2';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



export default function EmploymentRate() {
  useEffect(() => {
    Aos.init({
      duration: 3000,
    });
  }, []);
  return (
    <div>
      <div data-aos="zoom-out" className="EmploymentBox" >
          <section className='contentandemployment'>
              <h3 className="EmploymentAndUnemploymentRateInAfrica" >
                employment and unemployment rate in Africa
              </h3>
            <div className='ContentBox'>
              <section className='employmentcontent1'>
                <h4 className="EmploymentRate" >
                  employment rate
                </h4>
                <p className="Content">
                  <Countup1/>
                </p>
              </section>
              <div className="Line1"></div>
              <section className='employmentcontent2'>
                <h4 className="UnemploymentRate">
                  unemployment rate
                </h4>
                <p className="Content2" >
                  <Countup2/>
                </p> 
              </section>
            </div>
          </section>
      </div>
    </div>
  )
}
