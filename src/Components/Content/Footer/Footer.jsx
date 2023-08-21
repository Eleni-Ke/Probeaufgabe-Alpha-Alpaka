import Container from "./Container";
import LinkBar from "./LinkBar";

const Footer = () => {
  return (
    <div>
      <div className="mx-auto w-10 h-10 rounded-full bg-[#F2F2F2] hover:bg-[#C8C8C8] active:border-[#4B4B4B] active:border-[1px] flex justify-center items-center my-[39.97px] shadow-gray-400 shadow-md">
        <button
          className=" h-5 py-[6.667px] w-auto"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img className="" src="/images/Arrow-top.svg" alt="" />
        </button>
      </div>
      <Container />
      <LinkBar />
    </div>
  );
};

export default Footer;
