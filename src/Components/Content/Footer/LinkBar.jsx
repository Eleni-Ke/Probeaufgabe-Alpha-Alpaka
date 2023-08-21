const LinkBar = () => {
  return (
    <div className="px-4 custom:px-[104px] py-6 flex gap-2 justify-between text-xs flex-col custom:flex-row">
      <p>© 2023 Loremipsum GmbH</p>
      <div className="flex gap-2 custom:gap-4">
        <p>Datenschutz</p>
        <p className="custom:hidden">Infopflichten Pharmakovigilanz</p>
        <p className="custom:order-first">Impressum</p>
      </div>
    </div>
  );
};

export default LinkBar;
