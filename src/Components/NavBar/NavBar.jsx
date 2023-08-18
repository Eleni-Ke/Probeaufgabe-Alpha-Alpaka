const NavBar = () => {
  return (
    <nav className="">
      <div className="border-b-2 mx-[104px] flex items-center justify-between h-[88px]">
        {/* ------Logo------ */}
        <div>
          <img src="/images/logoipsum-297 1.svg" alt="Logoips" />
        </div>
        <div className="justify-start items-start flex gap-3 text-">
          {/* ------Blog Nav------ */}
          <div>Blog</div>
          {/* ------Product Nav------ */}
          <div>Products</div>
          {/* ------About Nav------ */}
          <div>About</div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
