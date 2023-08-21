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
      <button className="text-left mt-6">Read more</button>
    </div>
  );
};

export default MegamenuBlogSingle;
