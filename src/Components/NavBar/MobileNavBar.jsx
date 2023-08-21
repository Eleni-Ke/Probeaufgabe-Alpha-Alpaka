import { useState } from "react";

const MobileNavBar = () => {
  const [blogVisible, setBlogVisible] = useState(false);
  const [productVisible, setProductVisible] = useState(false);

  const toggleBlog = () => {
    if (productVisible) {
      setProductVisible(false);
    }
    setBlogVisible(!blogVisible);
  };

  const toggleProduct = () => {
    if (blogVisible) {
      setBlogVisible(false);
    }
    setProductVisible(!productVisible);
  };

  return (
    <div>
      <div className="flex flex-col sticky top-[88px] z-20 bg-white border-t-[1px] justify-between min-h-[calc(100vh-88px)]">
        <div className="flex flex-col mb-auto">
          <button
            className="flex justify-between items-center  p-4 border-[1px]"
            onClick={toggleBlog}
          >
            Blog
            {blogVisible ? (
              <img
                src="images/Arrow-top.svg"
                alt="arrow right"
                className=" df rotate-180"
              />
            ) : (
              <img
                src="images/Arrow-top.svg"
                alt="arrow right"
                className=" df rotate-90"
              />
            )}
          </button>
          {blogVisible && (
            <div className="flex flex-col bg-[#F2F2F2] items-start">
              <button className=" py-4 pl-8">City</button>
              <button className=" py-4 pl-8">Forest</button>
              <button className=" py-4 pl-8">Water</button>
            </div>
          )}

          <button
            className="flex justify-between items-center border-[1px] p-4"
            onClick={toggleProduct}
          >
            Products
            {productVisible ? (
              <img
                src="images/Arrow-top.svg"
                alt="arrow right"
                className=" df rotate-180"
              />
            ) : (
              <img
                src="images/Arrow-top.svg"
                alt="arrow right"
                className=" df rotate-90"
              />
            )}
          </button>

          {productVisible && (
            <div className="flex flex-col bg-[#F2F2F2] items-start">
              <button className=" py-4 pl-8">Product-A</button>
              <button className=" py-4 pl-8">Product-B</button>
              <button className=" py-4 pl-8">Product-C</button>
              <button className=" py-4 pl-8">Product-D</button>
              <button className=" py-4 pl-8">Product-E</button>
              <button className=" py-4 pl-8">Product-F</button>
              <button className=" py-4 pl-8">Product-G</button>
            </div>
          )}

          <button className="text-left  p-4 border-[1px]">About</button>
        </div>
        <div className="flex flex-col items-start px-4 my-[65px] gap-4">
          <p>Impressum</p>
          <p>Datenschutz</p>
          <p>© 2023 Loremipsum GmbH</p>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
