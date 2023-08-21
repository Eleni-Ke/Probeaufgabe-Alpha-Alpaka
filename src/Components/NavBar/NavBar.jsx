import { useState } from "react";
import MegamenuBlog from "./MegamenuBlog";
import MegamenuProduct from "./MegaMenuProduct";
import MobileNavBar from "./MobileNavBar";

const NavBar = () => {
  const [megamenuBlogVisible, setMegamenuBlogVisible] = useState(false);
  const [megamenuProductVisible, setMegamenuProductVisible] = useState(false);
  const [mobilemenuVisible, setMobilemenuVisible] = useState(false);

  const togglemobile = () => {
    setMobilemenuVisible(!mobilemenuVisible);
  };

  const toggleMegamenuBlog = () => {
    if (megamenuProductVisible) {
      setMegamenuProductVisible(false);
    }
    setMegamenuBlogVisible(!megamenuBlogVisible);
  };

  const toggleMegamenuProduct = () => {
    if (megamenuBlogVisible) {
      setMegamenuBlogVisible(false);
    }
    setMegamenuProductVisible(!megamenuProductVisible);
  };

  return (
    <>
      <nav className="sticky top-0 bg-white shadow-md shadow-gray-400 z-20">
        <div className=" mx-4 custom:mx-[104px] flex items-center justify-between h-[88px]">
          <div>
            <img src="/images/logoipsum-297 1.svg" alt="Logoips" />
          </div>
          <button className="custom:hidden" onClick={togglemobile}>
            <img src="images/menu.svg" alt="menu" />
          </button>
          <div className="custom:flex justify-start items-start hidden gap-3 text-">
            <button
              className="hover:text-[#B0CB52] active:text-[#00915A]hover:underline"
              onClick={toggleMegamenuBlog}
            >
              Blog
            </button>

            <button
              className="hover:text-[#B0CB52] active:text-[#00915A]"
              onClick={toggleMegamenuProduct}
            >
              Products
            </button>

            <button className="hover:text-[#B0CB52] active:text-[#00915A]">
              About
            </button>
          </div>
        </div>
      </nav>
      {megamenuBlogVisible && <MegamenuBlog />}
      {megamenuProductVisible && <MegamenuProduct />}
      {mobilemenuVisible && <MobileNavBar />}
    </>
  );
};

export default NavBar;
