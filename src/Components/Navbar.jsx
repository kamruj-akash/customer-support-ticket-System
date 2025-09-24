const Navbar = () => {
  const navBtns = ["Home", "Faq", "Changelog", "Blog", "Download", "Contact"];
  return (
    <div className=" bg-white shadow-md border-b-[0.5px] border-gray-300">
      <div className="container mx-auto">
        <nav className="px-8 py-4 flex justify-between items-center">
          <h1 className="md:text-xl text-sm font-bold">CS — Ticket System</h1>
          <div className="md:flex hidden items-center gap-6">
            {navBtns.map((btn, index) => (
              <button
                key={index}
                className="cursor-pointer hover:text-purple-400 text-gray-600"
              >
                {btn}
              </button>
            ))}
            <button className="cursor-pointer hover bg-gradient-to-tl to-[#632EE3] from-[#9F62F2] text-white px-4 py-2 rounded-lg hover:cursor-pointer">
              + New Ticket
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
