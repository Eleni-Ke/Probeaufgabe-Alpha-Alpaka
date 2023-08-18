const Test = () => {
  return (
    <div className="jumbotron h-80">
      <div className="background relative h-52">
        {/* <img
          src="/images/bg-img.png"
          alt="trees and water from above"
          className="absolute"
        /> */}
        <div className="text-container absolute z-10 text-white flex flex-col justify-center items-center w-full">
          <h1>The start of a great adventure.</h1>
          <p className="main-text">
            Porta dui sed mattis odio cras integer sapien proin diam. Malesuada
            purus bibendum nulla libero ut etiam ut. Amet odio felis gravida
            porta accumsan arcu. Libero neque mi vestibulum habitant neque
            sagittis venenatis.
          </p>

          <div className="button">
            <a href="#link" className="link">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
