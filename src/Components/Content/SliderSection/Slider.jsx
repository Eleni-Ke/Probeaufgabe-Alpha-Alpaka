const Slider = ({ image, isActive }) => {
  return (
    <div
      className={`relative custom:block duration-200 ease-linear ${
        isActive ? "block" : "hidden"
      }`}
      data-carousel-item
    >
      <img src={image.link} alt="trees" className=" w-full" />
      <div className="absolute top-0 h-full z-10 w-full mt-auto flex justify-center items-end pb-7">
        <button className="bg-white hover:bg-[#C8C8C8] active:border-[#4B4B4B] active:border-[1px] px-6 py-2 text-[15px] rounded-full">
          Lorem Ipsum
        </button>
      </div>
    </div>
  );
};

export default Slider;
