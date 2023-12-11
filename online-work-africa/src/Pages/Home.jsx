import React from 'react';
import "../styles/Home.css";
import Slider from "../components/components/Slider";
import AboutUsBox from '../components/AboutUsBox';
import EmploymentRate from '../components/EmploymentRate';
import Cardslider from '../components/cardslider';
import OurGoals from '../components/OurGoals';
import PartnerWithUs from '../components/PartnerWithUs';
import SponsorsSlider from '../components/SponsorsSlider';


export default function Home() {
  return (
    <div ClassName ="Home">
      <Slider />
      <AboutUsBox />
      <OurGoals/>
      <EmploymentRate />
      <Cardslider />
      <PartnerWithUs />
      <SponsorsSlider />
    </div>
  )
}
