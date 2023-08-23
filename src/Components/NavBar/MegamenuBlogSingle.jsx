const MegamenuBlogSingle = (props) => {
  return (
    <div className="h-full flex flex-col justify-between text-left">
      <img
        src={props.blog.img}
        alt={props.blog.title}
        className="w-full mb-4"
      />
      <div className="content flex flex-col h-full">
        <p className="df text-xs text-[#C8C8C8] mb-2">ARTICLE</p>
        <h4 className="text-[32px] mb-2">{props.blog.title}</h4>
        <p className="text-[15px]">{props.blog.content}</p>
      </div>
      <button className="flex gap-2 items-center  text-[#4B4B4B] mt-2 px-4 py-2 rounded-full bg-[#F2F2F2] hover:bg-[#C8C8C8] active:border-[#4B4B4B] active:border-[1px] mr-auto">
        <img src="images/RightArrow.svg" alt="right arrow" />
        <p>Read more</p>
      </button>
    </div>
  );
};

export default MegamenuBlogSingle;
