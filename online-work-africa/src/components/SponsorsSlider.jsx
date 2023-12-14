import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/SponsorsSlider.css"
import image0 from "../images/Slider 1.png"

function SponsorsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className='w-3/4 m-auto'>
      <div className="mt-5 ">
      <h2 className="SStextH2">SPONSORS</h2>
      <Slider {...settings}>
        {data.map((d) => (
            <img src={d.img} alt=""/>
        ))}
      </Slider>
      </div>
      
    </div>
  );
}

const data = [
  {
    img: image0,
  },
  {
    img: image0,
  },
  {
    img: image0,
  },
  {
    img: image0,
  },
  {
    img: image0,
  },
  
];

export default SponsorsSlider;