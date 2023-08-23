import { useState } from "react";
import forestImages from "../../../Data/forestImages";
import Slider from "./Slider";

const SliderSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % forestImages.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? forestImages.length - 1 : prevIndex - 1
    );
  };
  return (
    <div
      className="px-4 custom:px-[104px] py-[40px]"
      data-carousel="static"
      id="animation-carousel"
    >
      <div className="flex gap-2">
        <button className="rounded-full bg-[#F2F2F2] hover:bg-[#C8C8C8] active:border-[#4B4B4B] active:border-[1px] shadow-gray-400 shadow-md px-4 py-2">
          Show All
        </button>
        <button className="rounded-full bg-[#F2F2F2] hover:bg-[#C8C8C8] active:border-[#4B4B4B] active:border-[1px]  shadow-gray-400 shadow-md px-4 py-2">
          City
        </button>
        <button className="rounded-full bg-[#F2F2F2] hover:bg-[#C8C8C8] active:border-[#4B4B4B] active:border-[1px] px-4 py-2 shadow-gray-400 shadow-md">
          Forest
        </button>
        <button className="rounded-full bg-[#F2F2F2] hover:bg-[#C8C8C8] active:border-[#4B4B4B] active:border-[1px] shadow-gray-400 shadow-md px-4 py-2">
          Water
        </button>
      </div>
      <div className="relative">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px] my-4 overflow-hidden">
          {forestImages.map((image, index) => {
            return (
              <Slider
                key={image.id}
                image={image}
                isActive={index === activeIndex}
              />
            );
          })}
        </div>
        <div>sliderbar</div>
        <button
          type="button"
          class="absolute top-[-20px] left-[-35px] z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#4B4B4B] text-white">
            <img
              src="images/white-right-arrow.svg"
              alt="right arrow"
              className="transform rotate-180"
            />
            <span class="sr-only">Next</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-[-20px] right-[-35px] z-10 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#4B4B4B] text-white">
            <img
              src="images/white-right-arrow.svg"
              alt="right arrow"
              className=""
            />
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default SliderSection;
