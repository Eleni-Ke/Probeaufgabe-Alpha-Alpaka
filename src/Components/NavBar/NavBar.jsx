const NavBar = () => {
  return (
    <nav className="sticky top-0 bg-white shadow-md shadow-gray-400 z-20">
      <div className=" mx-[104px] flex items-center justify-between h-[88px]">
        {/* ------Logo------ */}
        <div>
          <img src="/images/logoipsum-297 1.svg" alt="Logoips" />
        </div>
        <div className="justify-start items-start flex gap-3 text-">
          {/* ------Blog Nav------ */}
          <button className="hover:text-[#B0CB52] active:text-[#00915A]hover:underline">
            Blog
          </button>
          {/* ------Product Nav------ */}
          <button className="hover:text-[#B0CB52]active:text-[#00915A]">
            Products
          </button>
          {/* ------About Nav------ */}
          <button className="hover:text-[#B0CB52] active:text-[#00915A]">
            About
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
