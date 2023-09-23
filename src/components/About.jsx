import { AiFillHeart } from "react-icons/ai";
import Avatar from "../assets/avatar.png";
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const About = () => {
  return (
    <section name="about" className="bg-primary py-24">
      <div className="w-[90%] max-w-7xl mx-auto ">
        <h2 className="text-3xl md:text-5xl text-f-primary font-semibold pb-6">
          About me
        </h2>
        <div className="border border-f-primary rounded-lg px-2 md:px-10 bg-secondary">
          <div className="flex  border-b border-f-primary gap-2 py-7 px-2  items-center  lg:px-36">
            <div className="w-20 ">
              <img src={Avatar} alt="ptofile" />
            </div>
            <div>
              <h3 className="text-[1rem] font-medium md:text-2xl">
                Karthik Mohan
              </h3>

              <p>
                <AiFillHeart
                  className="text-red-500  inline-block me-1"
                  size={20}
                />
                <span className="text-f-secondary font-light ">
                  liked by <span className="underline font-normal">you</span>{" "}
                  and 123 others
                </span>
              </p>
            </div>
          </div>
          <div className="py-8 px-2 md:px-5 lg:px-36 text-f-primary text-xl font-medium  leading-9">
            <p className="mb-2">
              Welcome to my corner of the web! I'm an Electrical and Electronics
              Engineering graduate with a passion for building beautiful,
              performant, and secure web applications.
            </p>
            <p className="mb-2">
              I'm currently learning web development and I'm eager to contribute
              to a team of experienced developers.
            </p>
            <p className="mb-2">
              I'm a team player and always willing to help others.
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
