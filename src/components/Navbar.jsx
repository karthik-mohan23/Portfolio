import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="bg-primary">
      <div className="fixed top-0 left-0 z-10  bg-primary w-full">
        <nav className=" w-[90%] max-w-7xl mx-auto py-6 flex items-center justify-between  ">
          <h3 className="hover:cursor-pointer">
            <Link to="home" smooth={true}>
              KM
            </Link>
          </h3>
          <ul className="flex items-center gap-8 md:gap-11 md:text-xl font-medium">
            <li className="hover:cursor-pointer">
              <Link to="about" smooth={true}>
                About
              </Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link to="skills" smooth={true}>
                Skills
              </Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link to="projects" smooth={true}>
                Projects
              </Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link to="contact" smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
