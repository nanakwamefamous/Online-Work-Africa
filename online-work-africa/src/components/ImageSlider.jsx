// Slider.js

import React, { useState, useEffect } from 'react';
import './styles/ImageSilder.css';

const Slider = ({ autoPlayInterval = 3000 }) => {
  const images = [
    '../images/',
    'https://placekitten.com/801/400',
    'https://placekitten.com/802/400',
    'https://placekitten.com/803/400',
    'https://placekitten.com/804/400',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    let sliderInterval;

    if (autoPlay) {
      sliderInterval = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }

    return () => {
      clearInterval(sliderInterval);
    };
  }, [autoPlay, currentIndex, autoPlayInterval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setAutoPlay((prevAutoPlay) => !prevAutoPlay);
  };

  return (
    <div className="slider-container">
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="control-btn prev" onClick={prevSlide}>
        Prev
      </button>
      <button className="control-btn next" onClick={nextSlide}>
        Next
      </button>

      <div className="manual-btns">
        {images.map((_, index) => (
          <button
            key={index}
            className={`manual-btn ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button className="auto-play-btn" onClick={toggleAutoPlay}>
        {autoPlay ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default Slider;
