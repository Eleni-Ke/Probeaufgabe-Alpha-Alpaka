const Header = () => {
  return (
    <div className="p-[24px] relative">
      <img src="/images/bg-img.png" alt="trees and water from above" />
      <div className="grid grid-cols-3 absolute top-0 h-full z-10">
        <div className=" text-[#FFF] flex flex-col justify-center items-center w-full h-full col-start-2 col-span-1">
          <h1 className="max-w-[100%] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] mb-2">
            The start of a great adventure.
          </h1>
          <p className="text-sm sm:text-md md:text-lg lg:text-[20px] mb-6">
            Porta dui sed mattis odio cras integer sapien proin diam. Malesuada
            purus bibendum nulla libero ut etiam ut. Amet odio felis gravida
            porta accumsan arcu. Libero neque mi vestibulum habitant neque
            sagittis venenatis.
          </p>

          <div className="button">
            <a href="#link" className="link">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
