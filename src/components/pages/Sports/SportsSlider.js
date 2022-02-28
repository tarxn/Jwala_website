import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { IconContext } from "react-icons/lib";
import "./SportsSlider.css";
import { SportsSliderData } from "./SportsSliderData";

const SportsSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(0);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <IconContext.Provider value={{ color: "white" }}>
      <section className="slider-section">
        <MdKeyboardArrowLeft className="left-arrow" onClick={prevSlide} />
        <MdKeyboardArrowRight className="right-arrow" onClick={nextSlide} />
        {SportsSliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  src={slide.image}
                  alt="sports-image"
                  className="image-section"
                />
              )}
              <div className="content-container">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          );
        })}
      </section>
    </IconContext.Provider>
  );
};

export default SportsSlider;
