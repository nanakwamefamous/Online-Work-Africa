import React from 'react';
import "../styles/Home.css";
import Slider from "../components/components/Slider";
import AboutUsBox from '../components/AboutUsBox';
import EmploymentRate from '../components/EmploymentRate';


export default function Home() {
  return (
    <div ClassName ="Home">
      <Slider />
      <AboutUsBox />
      <EmploymentRate />
    </div>
  )
}
