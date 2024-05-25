import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Logo from "../assets/logo.png";
import { HiBars4 } from "react-icons/hi2";
import { navLinks } from "../utils/constants";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="bg-primary">
      <div className="fixed top-0 left-0 z-10  bg-primary w-full">
        <nav className=" w-[95%] max-w-7xl mx-auto  py-5  ">
          <div className="flex items-center gap-10 justify-between">
            <h3 className="hover:cursor-pointer">
              <Link to="home" smooth={true}>
                <img src={Logo} alt="brand logo" className="w-10" />
              </Link>
            </h3>
            {/* <ul className="flex items-center gap-5 sm:gap-7  md:gap-11 sm:text-xl font-medium"> */}
            <ul className="hidden md:flex items-center  text-xl gap-7  font-medium ">
              {navLinks.map(({ href, label }) => {
                return (
                  <li
                    key={label}
                    className="hover:cursor-pointer hover:underline hover:text-yellow-700 duration-300 ">
                    <Link to={href} smooth={true}>
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <HiBars4
              className={`md:hidden cursor-pointer ${
                isActive && "rotate-90"
              } duration-300`}
              onClick={() => setIsActive((prev) => !prev)}
              size={25}
            />
          </div>
          {isActive && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2, duration: 0.1 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}>
              <ul className="md:hidden w-full h-auto py-2 ">
                {navLinks.map(({ href, label }) => {
                  return (
                    <li
                      key={label}
                      className="hover:cursor-pointer hover:underline border border-b-black py-3 ps-2 text-xl hover:text-yellow-700 hover:ps-3 duration-300">
                      <Link
                        to={href}
                        smooth={true}
                        onClick={() => setIsActive(false)}>
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
