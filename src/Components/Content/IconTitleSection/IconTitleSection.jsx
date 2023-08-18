import iconTitleList from "../../../Data/iconTitleList";
import IconTitle from "./IconTitle";

const IconTitleSection = () => {
  return (
    <div className="grid grid-cols-3 px-[104px] py-[40px] gap-4">
      {iconTitleList.map((icon) => {
        return <IconTitle key={icon.id} icon={icon} />;
      })}
    </div>
  );
};

export default IconTitleSection;
