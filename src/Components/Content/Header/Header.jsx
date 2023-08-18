const Header = () => {
  return (
    <div className="relative w-full h-fit">
      <div className=" p-6">
        <img
          className="w-full h-auto object-cover"
          src="/images/bg-img.png"
          alt="forest and water from above"
        />
      </div>
      <div className="absolute inset-0 w-full">
        <div className=" text-white flex w-72 h-888 flex-col justify-center items-center gap-24 z-10">
          <h1 className="text-3xl font-bold mb-4">
            The start of a great adventure.
          </h1>
          <p className="text-lg">
            Porta dui sed mattis odio cras integer sapien proin diam. Malesuada
            purus bibendum nulla libero ut etiam ut. Amet odio felis gravida
            porta accumsan arcu. Libero neque mi vestibulum habitant neque
            sagittis venenatis.
          </p>

          <div className="w-32 h-12 px-6 bg-white rounded-3xl justify-center items-center inline-flex">
            <div className="text-neutral-600 text-base font-bold leading-normal">
              Read more
            </div>
          </div>
          <div className="w-20 h-10 px-4 bg-zinc-100 rounded-3xl justify-center items-center inline-flex">
            <div className="text-neutral-600 text-base font-bold leading-normal">
              Button
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
