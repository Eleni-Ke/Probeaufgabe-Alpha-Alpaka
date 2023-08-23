import { useState } from "react";
import MegamenuBlog from "./MegamenuBlog";
import MegamenuProduct from "./MegaMenuProduct";
import MobileNavBar from "./MobileNavBar";

const NavBar = () => {
  // The states to regulate the menu visibility
  const [megamenuBlogVisible, setMegamenuBlogVisible] = useState(false);
  const [megamenuProductVisible, setMegamenuProductVisible] = useState(false);
  const [mobilemenuVisible, setMobilemenuVisible] = useState(false);

  // Toggles between visible and not visible
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
          <div className="custom:flex justify-start items-start hidden gap-3 ">
            <div className="navItemBlog hover:text-[#B0CB52] active:text-[#00915A]">
              <button onClick={toggleMegamenuBlog}>
                <p className="py-[30px]">Blog</p>
                <div className="  active:bg-[#00915A] w-14 h-1 rounded-tl rounded-tr"></div>
              </button>
            </div>

            <div className="navItemProduct hover:text-[#B0CB52] active:text-[#00915A]">
              <button onClick={toggleMegamenuProduct}>
                <p className="pt-[30px]">Products</p>
                <div className=" mt-[30px] active:bg-[#00915A] w-14 h-1 rounded-tl rounded-tr"></div>
              </button>
            </div>

            <div className="navItemAbout hover:text-[#B0CB52] active:text-[#00915A]">
              <button>
                <p className="py-[30px]">About</p>
                <div className=" active:bg-[#00915A] w-14 h-1 rounded-tl rounded-tr"></div>
              </button>
            </div>
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
