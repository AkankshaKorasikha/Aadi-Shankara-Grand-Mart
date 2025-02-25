import React, { useState, useEffect } from 'react';

const slides = [
  { id: 1, image: '/Images/slider1.jpeg', alt: 'Promotion 1' },
  { id: 2, image: '/Images/slider2.jpg', alt: 'Promotion 2' },
  { id: 3, image: '/Images/slider3.webp', alt: 'Promotion 3' },
  { id: 4, image: '/Images/slider4.jpg', alt: 'Promotion 4' }
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default Slider;

