import React from 'react';
import "../styles/EmploymentRate.css";
import Countup1 from './Countup1';
import Countup2 from './Countup2';


export default function EmploymentRate() {
  return (
    <div>
      <div className="EmploymentBOX" style={{width: '100%', height: '260px', position: 'relative', marginTop: '20px'}}>
        <div className="UnemploymentRateBox" style={{width: '100%', height: '260px', left: 0, top: 0, position: 'absolute', background: 'blue'}} />
        <h3 className="EmploymentAndUnemploymentRateInAfrica" style={{width: 'auto', height: '4px', left: '250px', top: '-30px', position: 'absolute', textAlign: '', color: 'white', fontSize: '36px', fontWeight: '400', textTransform: 'uppercase', lineHeight: '35px', wordWrap: ''}}>
          employment and unemployment rate in Africa
        </h3>
        <div style={{bottom:'40px', position:'relative'}}>
          <p className="Content">
            <Countup1/>
          </p>
          <h3 className="EmploymentRate" >
            employment rate
          </h3>
          <div className="Line1" style={{width: '162px', height: 0, left: '719px', top: '99px', position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px white solid'}}></div>
          <p className="Content2" >
            <Countup2/>
          </p>
          <h3 className="UnemploymentRate">
            unemployment rate
          </h3>
        </div>
      </div>
    </div>
  )
}
