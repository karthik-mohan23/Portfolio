import Avatar from "../assets/avatar.png";
import {
  AiOutlineGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Hero = () => {
  return (
    <main className="bg-primary min-h-screen">
      <section className="w-[90%] max-w-7xl mx-auto py-16 md:py-28 md:flex justify-between items-center">
        <div className="mb-16 lg:mb-0 ">
          <h3 className="text-f-secondary text-xl font-medium pt-5 ">
            Hi, my name is
          </h3>
          <h1 className="text-6xl text-f-primary font-semibold py-6 lg:text-8xl justify-between">
            Karthik Mohan
          </h1>
          <p className="text-f-secondary text-xl font-medium leading-8 max-w-xl py-3 mb-6">
            I'm a self motivated
            <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block mx-2">
              <span class="relative text-white">full</span>
            </span>{" "}
            stack developer who loves playing around with new technologies.
            Since it's also my favorite hobby, I find pure enjoyment in every
            facet of my work :)
          </p>
          <div className=" bg-f-primary text-xl   rounded-full border border-f-primary  relative w-40 h-14">
            <button className="absolute  bg-btn-yellow w-full h-full font-semibold text-f-primary rounded-full tracking-widest -top-1 -left-1 hover:-top-2 hover:-left-2 duration-300">
              Contact
            </button>
          </div>
        </div>
        <div>
          <div className=" max-w-xl mb-4">
            <img
              src={Avatar}
              alt=""
              className="w-full h-full block object-contain"
            />
          </div>
          <div className="flex items-center justify-center gap-12 ">
            <AiOutlineGithub size={30} />
            <AiFillLinkedin size={30} />
            <AiFillTwitterCircle size={30} />
          </div>
        </div>
      </section>
    </main>
  );
};
export default Hero;
