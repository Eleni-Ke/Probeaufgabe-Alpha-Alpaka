const Product = (props) => {
  return (
    <div
      style={{ backgroundColor: props.product.color }}
      className="rounded-md shadow-gray-400 shadow-md "
    >
      <img src={props.product.image} alt={props.product.title} />
      <div className="flex flex-col gap-6 px-6 pb-6 text-[#FFF]">
        <div>
          <h4 className="text-[20px]">{props.product.title}</h4>
          <p className="sf text-[15px]">{props.product.description}</p>
        </div>

        <div className="bg-white h-10 w-10 rounded-full flex  hover:bg-[#C8C8C8] hover:cursor-pointer">
          <img
            src="/images/RightArrow.svg"
            alt="right arrow"
            className="m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
