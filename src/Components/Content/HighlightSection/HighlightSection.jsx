const HighlightSection = () => {
  return (
    <div className="mx-4 custom:mx-[104px] my-[40px] grid  md:grid-cols-2 lg:grid-cols-3 shadow-lg shadow-slate-400">
      <div className=" col md:col-span-1 lg:col-span-2 rounded-t-lg md:rounded-r-lg md:rounded-tl-none overflow-hidden">
        <img
          src="/images/waves.png"
          alt="waves"
          className="w-auto lg:w-full h-full object-cover"
        />
      </div>
      <div className="md:order-first bg-[#009CC4] col-span-1 flex flex-col py-10 px-8 gap-auto text-left rounded-b-lg md:rounded-br-none md:rounded-l-lg">
        <div className="description h-full text-[#FFF] flex flex-col gap-4">
          <h4 className="sd text-[32px] self-stretch">
            Enim nulla facilisis viverra lobortis
          </h4>
          <p className="sd text-[15px] font-normal">
            Lectus orci lectus in leo vel a. Venenatis sagittis nunc fermentum
            urna morbi. Sed luctus mi vulputate posuere quis. Amet dolor rhoncus
            tincidunt porta faucibus lorem in integer et.
          </p>
        </div>
        <button className="rounded-full bg-[#F2F2F2] hover:bg-[#C8C8C8] active:border-[#4B4B4B] active:border-[1px] px-4 py-2 mx-auto">
          Read more
        </button>
      </div>
    </div>
  );
};

export default HighlightSection;
