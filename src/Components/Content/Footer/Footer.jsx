import Container from "./Container";
import LinkBar from "./LinkBar";

const Footer = () => {
  return (
    <div>
      <div className="mx-auto w-10 h-10 rounded-full bg-[#F2F2F2] flex justify-center items-center my-[39.97px]">
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
