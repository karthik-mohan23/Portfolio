import { AiFillHeart } from "react-icons/ai";
import profilePhoto from "../assets/insta.png";

const About = () => {
  return (
    <section name="about" className="bg-primary py-24">
      <div className="w-[90%] max-w-7xl mx-auto ">
        <h2 className="text-3xl md:text-5xl text-f-primary font-semibold pb-6">
          About me
        </h2>
        <div className="border border-f-primary rounded-lg px-10 bg-secondary">
          <div className="flex  border-b border-f-primary gap-2 py-7  items-center  lg:px-32">
            <div className="w-20 md:w-32">
              <img src={profilePhoto} alt="" />
            </div>
            <div>
              <h3 className="text-[1rem] font-medium md:text-2xl">
                Karthik Mohan
              </h3>
              <p className=" flex items-center gap-2">
                <AiFillHeart className="text-red-500" />
                <span className="text-f-secondary font-light ">
                  liked by <span className="underline font-normal">you</span>{" "}
                  and 23 others
                </span>
              </p>
            </div>
          </div>
          <div className="py-8 px-5 lg:px-36 text-f-primary text-xl font-medium  leading-9">
            <p className="mb-2">
              Welcome to my corner of the web! I'm a graduate in Electrical and
              Electronics Engineering.
            </p>
            <p className="mb-2">
              Ever since my young age, I've been fascinated by technology. So,
              I've decided to take the leap and pursue a career in web
              development.
            </p>
            <p className="mb-2">
              The unique combination of creativity, logic, technology, and the
              never-ending stream of new discoveries drives my excitement and
              passion for web development.
            </p>
            <p className="mb-2">
              I enjoy solving problems and building things that looks beautiful
              using code.
            </p>
            <p className="mb-2">
              I look forward to learning and growing in order to build products
              that are performant, secure, and have the power to enhance
              people's lives.
            </p>
            <p className="text-[1rem] text-blue-400">
              #music #football #yoga #gym #reading #drawing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
