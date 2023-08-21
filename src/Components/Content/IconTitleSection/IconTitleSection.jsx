import iconTitleList from "../../../Data/iconTitleList";
import IconTitle from "./IconTitle";

const IconTitleSection = () => {
  return (
    <div className="grid custom:grid-cols-1 sm:grid-cols-2 custom:no-wrap md:grid-cols-3 px-4 custom:px-[104px] py-[40px] gap-4">
      {iconTitleList.map((icon) => {
        return <IconTitle key={icon.id} icon={icon} />;
      })}
    </div>
  );
};

export default IconTitleSection;
