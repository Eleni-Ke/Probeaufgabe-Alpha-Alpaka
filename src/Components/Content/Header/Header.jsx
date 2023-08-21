const Header = () => {
  return (
    <div className=" custom:p-[24px] relative ">
      <img src="/images/bg-img.png" alt="trees and water from above" />
      <div className="grid grid-cols-1 custom:grid-cols-3 absolute top-0 h-full z-10 w-full">
        <div className=" text-[#FFF] flex flex-col justify-center items-center w-full h-full custom:col-start-2 col-span-1">
          <h1 className="max-w-[100%] text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[64px] mb-2">
            The start of a great adventure.
          </h1>
          <p className="text-[11px] sm:text-md md:text-lg lg:text-[20px] mb-6 custom:block hidden">
            Porta dui sed mattis odio cras integer sapien proin diam. Malesuada
            purus bibendum nulla libero ut etiam ut. Amet odio felis gravida
            porta accumsan arcu. Libero neque mi vestibulum habitant neque
            sagittis venenatis.
          </p>

          <div className="button">
            <button className="text-[#4B4B4B]  rounded-full bg-[#F2F2F2] hover:bg-[#C8C8C8] active:border-[#4B4B4B] active:border-[1px] px-4 py-2">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
