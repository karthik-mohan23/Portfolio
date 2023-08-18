import { AiFillHeart } from "react-icons/ai";
import profilePhoto from "../assets/insta.png";

const About = () => {
  return (
    <section className="bg-primary py-6">
      <div className="w-[90%] max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-f-primary font-semibold pb-6">
          About me
        </h2>
        <div className="border border-f-primary px-10 bg-secondary">
          <div className="flex  border-b border-f-primary gap-2 py-7 items-center">
            <div className="w-20 md:w-32">
              <img src={profilePhoto} alt="" />
            </div>
            <div>
              <h3 className="text-[1rem] font-medium md:text-xl">
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
          <div className="py-10 text-f-primary text-[1.125rem]">
            <p className=" mb-4">
              <span className="">Welcome</span> to my corner of the web! I'm a{" "}
              <span className="text-tertiary">graduate</span> in{" "}
              <span className="text-tertiary">
                Electrical and Electronics Engineering
              </span>{" "}
              with a lifelong passion for technology.
            </p>
            <p className="  mb-4">
              In this ever-evolving landscape, I embrace the challenges that
              come with keeping up with the latest trends and technologies.
            </p>
            <p className=" ">
              I am constantly on the lookout for opportunities to expand my
              skill set and broaden my knowledge, ensuring that I stay at the
              forefront of this exciting industry. The web is a canvas where I
              can express my creativity, and I am driven to leave my mark by
              pushing the boundaries of what's possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
