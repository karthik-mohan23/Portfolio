const Navbar = () => {
  return (
    <header className="bg-primary">
      <nav className="w-[90%] max-w-7xl mx-auto flex items-center justify-between py-6 ">
        <h3>KM</h3>
        <ul className="flex items-center gap-11 text-[1.125rem] font-medium">
          <li className="text-f-primary">About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
