const IconTitle = (props) => {
  return (
    <div className="flex flex-col bg-[#F2F2F2] p-10 gap-4 rounded-md  shadow-gray-400 shadow-md">
      <div className="mx-auto">
        <img src={props.icon.img} alt="icon" />
      </div>
      <div>
        <h5 className="f font-medium">{props.icon.title}</h5>
        <p className="text-[15px]">{props.icon.text}</p>
      </div>
    </div>
  );
};

export default IconTitle;
