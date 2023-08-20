import forestImages from "../../../Data/forestImages";
import Slider from "./Slider";

const SliderSection = () => {
  return (
    <div className="px-[104px] py-[40px]">
      <div>Filer buttons</div>
      <div className="grid grid-cols-4 gap-[18px]">
        {forestImages.map((image) => {
          return <Slider key={image.id} image={image} />;
        })}
      </div>
      <div>sliderbar</div>
    </div>
  );
};

export default SliderSection;
