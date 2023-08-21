import megamenuBlogData from "../../Data/megamenuBlogData";
import MegamenuBlogSingle from "./MegamenuBlogSingle";

const MegamenuBlog = () => {
  return (
    <div
      className="grid grid-cols-3 px-[104px] py-[40px] gap-4 h-full sticky top-[88px] z-20 bg-white border-t-2"
      id="dropdownMegamenuBlog"
    >
      {megamenuBlogData.map((blog) => {
        return <MegamenuBlogSingle key={blog.id} blog={blog} />;
      })}
    </div>
  );
};

export default MegamenuBlog;
