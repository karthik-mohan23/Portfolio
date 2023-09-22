import {
  AiOutlineGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="w-[90%] max-w-6xl mx-auto py-5">
        <div className="border rounded-full border-gray-300  "></div>
        <div className="flex justify-between flex-wrap py-10">
          <div className="mb-2 md:mb-0">
            <h2 className="text-2xl font-medium  md:mb-2">Karthik Mohan</h2>
            <p className="font-medium text-xl">Full Stack Developer</p>
          </div>
          <div>
            <p className="mb-4">
              Made with Vite, React, Tailwind and Framer Motion
            </p>
            <div className=" flex items-center md:justify-center gap-5 ">
              <a href="https://github.com/karthik-mohan23" target="_blank">
                <AiOutlineGithub
                  size={25}
                  className="hover:cursor-pointer hover:-translate-y-1 duration-300"
                />
              </a>

              <AiFillLinkedin
                size={25}
                className="hover:cursor-pointer hover:-translate-y-1 duration-300"
              />
              <AiFillTwitterCircle
                size={25}
                className="hover:cursor-pointer hover:-translate-y-1 duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
