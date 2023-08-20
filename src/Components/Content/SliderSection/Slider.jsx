const Slider = (props) => {
  return (
    <div className="relative">
      <img src={props.image.link} alt="trees" className=" w-full" />
      <button className="absolute">Lorem Ipsum</button>
    </div>
  );
};

export default Slider;
