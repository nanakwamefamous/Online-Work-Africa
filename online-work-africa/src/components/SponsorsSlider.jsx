import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/SponsorsSlider.css"
import sponsorsimg_1 from '../images/LOGO 1.png'
import sponsorsimg_2 from '../images/LOGO 2.png'
import sponsorsimg_4 from '../images/LOGO 4.jpg'
import sponsorsimg_5 from '../images/LOGO 5.jpg'
import sponsorsimg_6 from '../images/LOGO 6.jpg'
import sponsorsimg_7 from '../images/LOGO 7.png'
import sponsorsimg_8 from '../images/LOGO 8.png'

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
    <div className='w-2/4 m-auto'>
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
    img: sponsorsimg_1,
  },
  {
    img: sponsorsimg_2,
  },
  {
    img: sponsorsimg_4,
  },
  {
    img: sponsorsimg_5,
  },
  {
    img: sponsorsimg_6,
  },
  {
    img: sponsorsimg_7,
  },
  {
    img: sponsorsimg_8,
  },
  
];

export default SponsorsSlider;



