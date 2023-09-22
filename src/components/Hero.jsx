import { motion } from "framer-motion";
import illustration from "../assets/illustration.png";
import {
  AiOutlineGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <main className="bg-primary pt-24 md:pt-8">
      <section className="w-[90%] min-h-screen max-w-6xl mx-auto   md:flex  justify-between items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          <h3 className="text-f-secondary text-xl font-medium pt-5 ">
            Hi, my name is
          </h3>
          <h1 className="text-6xl text-f-primary font-semibold py-6 lg:text-8xl justify-between">
            Karthik Mohan
          </h1>
          <p className="text-f-secondary text-xl font-medium leading-8 max-w-xl py-3 mb-6">
            I'm a self motivated
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block mx-2">
              <span className="relative text-white">full</span>
            </span>
            stack developer who loves to build innovative and user-friendly
            products. Since it's also my favorite hobby, I find pure enjoyment
            in every facet of my work :)
          </p>
          <div className=" bg-f-primary text-xl   rounded-full border border-f-primary  relative w-40 h-14">
            <Link to="contact" smooth={true}>
              <button className="absolute  bg-btn-yellow w-full h-full font-semibold text-f-primary rounded-full tracking-widest -top-1 -left-1 hover:-top-2 hover:-left-2 duration-300">
                Contact
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="pt-16 md:pt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
          <div className=" max-w-xs mb-8 md:mb-10 mx-auto">
            <img
              src={illustration}
              alt=""
              className="w-full h-full block object-contain"
            />
          </div>
          <div className="flex items-center justify-center gap-12 ">
            <a href="https://github.com/karthik-mohan23" target="_blank">
              <AiOutlineGithub
                size={30}
                className="hover:cursor-pointer hover:-translate-y-1 duration-300 text-yellow-800"
              />
            </a>
            <a href="https://github.com/karthik-mohan23" target="_blank">
              <AiFillLinkedin
                size={30}
                className="hover:cursor-pointer hover:-translate-y-1 duration-300 text-yellow-800"
              />
            </a>
            {/* <a href="#" target="_blank"> */}
            <AiFillTwitterCircle
              size={30}
              className="hover:cursor-pointer hover:-translate-y-1 duration-300 text-yellow-800"
            />
            {/* </a> */}
          </div>
        </motion.div>
      </section>
    </main>
  );
};
export default Hero;
