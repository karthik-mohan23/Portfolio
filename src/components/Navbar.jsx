import { Link } from "react-scroll";
import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <header className="bg-primary">
      <div className="fixed top-0 left-0 z-10  bg-primary w-full">
        <nav className=" w-[95%] max-w-7xl mx-auto  py-5 flex items-center gap-10 sm:justify-between ">
          <h3 className="hover:cursor-pointer">
            <Link to="home" smooth={true}>
              <img src={Logo} alt="brand logo" className="w-7 sm:w-10 " />
            </Link>
          </h3>
          <ul className="flex items-center gap-5 sm:gap-7  md:gap-11 sm:text-xl font-medium">
            <li className="hover:cursor-pointer hover:underline">
              <Link to="skills" smooth={true}>
                Skills
              </Link>
            </li>
            <li className="hover:cursor-pointer hover:underline">
              <Link to="projects" smooth={true}>
                Projects
              </Link>
            </li>
            <li className="hover:cursor-pointer hover:underline">
              <Link to="about" smooth={true}>
                About
              </Link>
            </li>
            <li className="hover:cursor-pointer hover:underline">
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
