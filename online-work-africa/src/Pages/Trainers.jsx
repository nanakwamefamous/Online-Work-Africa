import React from 'react'
import "../styles/Trainers.css"
import image0 from "../images/Slider 1.png"
// import ttopimg from "../images/Slider 3.png"


export default function Trainers() {
  return (
    <div>
      <div>
        <div className='ttopimg'></div>
        <h4 className='th1text'>TRAINERS</h4>
        <div className='tline'></div>
        <div className='tbox'>
            {data.map((d) => (
            <div className='bg-red'>
              <div key={d.name} className="h-[450px] text-black rounded-xl m-5">
              <div className='h-56 flex justify-center items-center rounded-t-xl imgbg'>
                <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
              </div>
                <div className="flex flex-col items-center justify-center rounded-b-xl gap-4 p-4 bg-gray-400">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p className="text-center">{d.review}</p>
                </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  )
}


const data = [
  {
    name: `John Morgan`,
    img: image0,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: image0,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: image0,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: image0,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: image0,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: image0,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: image0,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: image0,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: image0,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: image0,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: image0,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: image0,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  
];

