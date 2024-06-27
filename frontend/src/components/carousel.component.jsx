import { useState } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  let nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative overflow-hidden h-screen w-screen">
      <div
        className="flex transition-transform ease-out duration-300"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, index) => (
          <img src={s} key={index} alt={`Slide ${index}`} className="w-screen h-screen object-cover" />
        ))}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center px-10 text-3xl text-white">
        <button
          onClick={previousSlide}
          style={{ top: "30%", transform: "translateY(-50%)" }}
          className="absolute left-0"
        >
          <FaArrowCircleLeft />
        </button>
        <button
          onClick={nextSlide}
          style={{ top: "30%", transform: "translateY(-50%)" }}
          className="absolute right-0"
        >
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  );
}
