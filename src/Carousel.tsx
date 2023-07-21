import React, { useState, useEffect } from 'react';
import { Slide } from '@mui/material';
import './Carousel.css';

interface CarouselProps {
  images: string[][];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageURLs, setImageURLs] = useState<string[][]>([]);

  useEffect(() => {
    setImageURLs(images);
  }, [images]);

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="carousel">
      <button className="btn left-btn" onClick={handlePrev}>
        &lt;
      </button>
      <div className="image-container">
        {imageURLs.length > 0 &&
          imageURLs.map((item, index) => {
            if (currentIndex === index) {
              return (
                <Slide
                  direction="right"
                  in={currentIndex === index}
                  mountOnEnter
                  unmountOnExit
                >
                  <img
                    key={index}
                    className="image"
                    src={require(`./images/${item[0]}.jpeg`)}
                    alt={item[0]}
                  />
                </Slide>
              );
            }
          })}
      </div>
      <button className="btn right-btn" onClick={handleNext}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
