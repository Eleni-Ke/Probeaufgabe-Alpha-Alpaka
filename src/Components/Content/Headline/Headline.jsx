const Headline = () => {
  return (
    <div className="px-[104px] pt-[40px] flex flex-col gap-4">
      <h2 className="text-[32px]" style={{ textShadow: "1px 3px 4px #9ca3af" }}>
        Blog
      </h2>
      <p style={{ textShadow: "1px 3px 4px #9ca3af" }}>
        Diam enim suscipit habitant ac nunc arcu commodo pulvinar massa. <br />{" "}
        Odio pellentesque fusce elit facilisi risus blandit dictum turpis erat.
        A vestibulum sed scelerisque quis in.
      </p>
    </div>
  );
};

export default Headline;
