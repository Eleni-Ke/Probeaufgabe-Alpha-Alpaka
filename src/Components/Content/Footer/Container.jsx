const Container = () => {
  return (
    <div className="hidden custom:grid grid-cols-4 px-[104px] py-[80px] text-left  bg-[#F2F2F2]  shadow-md shadow-gray-400">
      <div>
        <h5 className="font-bold mb-6">Loremipsum GmbH</h5>
        <p className="mb-4">
          Musterstraße 16 <br />
          1245 Musterstadt <br />
          Telefon: 0123 / 456789-10 <br />
          Telefax: 0123 / 456789-11
        </p>
        <button>Zur Kontaktliste</button>
      </div>
      <div>
        <h5 className="font-bold mb-6">Corporate</h5>
        <div className="gap-2 flex flex-col">
          <p>About</p>
          <p>Who we are</p>
          <p>Team</p>
          <p>Jobs</p>
          <p>Development</p>
        </div>
      </div>
      <div>
        <h5 className="font-bold mb-6">Products</h5>
        <div className="gap-2 flex flex-col">
          <p>Product-A</p>
          <p>Product-B</p>
          <p>Product-C</p>
          <p>Product-D</p>
          <p>Product-E</p>
          <p>Product-F</p>
          <p>Product-G</p>
          <p>Show all</p>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-between h-full">
          <div>
            <h5 className="font-bold mb-6">Service</h5>
            <div className="gap-2 flex flex-col">
              <p>Downloads</p>
              <p>FAQ</p>
            </div>
          </div>

          <div className="mt-auto flex gap-2">
            <img src="/images/Youtube.svg" alt="youtube icon" />
            Youtube
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
