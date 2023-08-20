const HighlightSection = () => {
  return (
    <div className="mx-[104px] my-[40px] grid grid-cols-3 shadow-lg shadow-slate-400">
      <div className="bg-[#009CC4] col-span-1 flex flex-col py-10 px-8 gap-auto text-left rounded-l-lg">
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
        <button>Read more</button>
      </div>
      <div className="col-span-2 rounded-r-lg overflow-hidden">
        <img src="/images/waves.png" alt="waves" className="w-full" />
      </div>
    </div>
  );
};

export default HighlightSection;
