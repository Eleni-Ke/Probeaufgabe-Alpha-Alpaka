import productList from "../../../Data/products";
import Product from "./Product";

const ProductSection = () => {
  return (
    <div className="flex flex-col px-4 custom:px-[104px] py-[40px] text-start gap-4">
      <p className="text-[32px] text-[#4B4B4B]">Our Products</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {productList.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      <a className="text-end text-[#4B4B4B] font-bold" href="#link">
        <span
          className="border-b-[1px] text-[15px] pb-[1.5px] border-black"
          style={{ textShadow: "1px 3px 4px #9ca3af" }}
        >
          Show all
        </span>
      </a>
    </div>
  );
};

export default ProductSection;
