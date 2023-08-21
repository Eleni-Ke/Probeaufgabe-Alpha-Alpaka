const MegamenuProduct = () => {
  return (
    <div className="grid grid-cols-3  px-[104px] py-[40px] gap-4 sticky top-[88px] z-20 bg-white  border-t-2">
      <div className="h-full flex flex-col justify-between">
        <div>
          <h3 className="text-left mb-8 text-[32px]">Products</h3>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-full bg-[#F2F2F2] hover:bg-[#C8C8C8] active:border-[#4B4B4B] active:border-[1px] ">
              Product-A
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F2F2F2] hover:bg-[#C8C8C8] active:border-[#4B4B4B] active:border-[1px] ">
              Product-B
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F2F2F2] hover:bg-[#C8C8C8] active:border-[#4B4B4B] active:border-[1px] ">
              Product-c
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F2F2F2] hover:bg-[#C8C8C8] active:border-[#4B4B4B] active:border-[1px] ">
              Product-D
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F2F2F2] hover:bg-[#C8C8C8] active:border-[#4B4B4B] active:border-[1px] ">
              Product-E
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F2F2F2] hover:bg-[#C8C8C8] active:border-[#4B4B4B] active:border-[1px] ">
              Product-F
            </button>
            <button className="px-4 py-2 rounded-full bg-[#F2F2F2] hover:bg-[#C8C8C8] active:border-[#4B4B4B] active:border-[1px] ">
              Product-G
            </button>
          </div>
        </div>
        <button className="flex gap-2 items-center rounded-full">
          <img src="images/RightArrow.svg" alt="right arrow" />
          <p className="underline">Show all</p>
        </button>
      </div>
      <div>
        <img src="images/green-product.png" alt="green product" />
        <div className="flex flex-col gap-6 pt-4 text-[#FFF]">
          <div className=" text-[#4B4B4B] text-left">
            <p className="text-[#C8C8C8] ">PRODUCT</p>
            <h4 className="text-[20px] py-2">Product A</h4>
            <p className="sf text-[15px]">
              At proin ipsum massa turpis viverra mi tristique nisi at. Sapien
              sed leo sit faucibus mattis augue morbi leo.
            </p>
          </div>

          <button className="flex gap-2 items-center  text-[#4B4B4B] px-4 py-2 rounded-full bg-[#F2F2F2] hover:bg-[#C8C8C8] active:border-[#4B4B4B] active:border-[1px] mr-auto">
            <img src="images/RightArrow.svg" alt="right arrow" />
            <p className="underline">Read more</p>
          </button>
        </div>
      </div>
      <div>
        <img src="images/blue-product.png" alt="blue product" />
        <div className="flex flex-col gap-6 pt-4 text-[#FFF]">
          <div className=" text-[#4B4B4B] text-left">
            <p className="text-[#C8C8C8] text-left">PRODUCT</p>
            <h4 className="text-[20px] py-2">Product B</h4>
            <p className="sf text-[15px]">
              Ante sit congue arcu morbi. Id diam id erat ultrices cursus eu at
              in mi. Euismod at a nibh sed duis ac.
            </p>
          </div>

          <button className="flex gap-2 items-center  text-[#4B4B4B] px-4 py-2 rounded-full bg-[#F2F2F2] hover:bg-[#C8C8C8] active:border-[#4B4B4B] active:border-[1px]  mr-auto">
            <img src="images/RightArrow.svg" alt="right arrow" />
            <p className="underline">Read more</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MegamenuProduct;
