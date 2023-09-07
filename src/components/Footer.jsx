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
          <div>
            <h2 className="text-2xl font-medium mb-2">Karthik Mohan</h2>
            <p className="font-medium text-xl">Full Stack Developer</p>
          </div>
          <div>
            <p className="mb-2">&copy; 2023 Karthik Mohan</p>
            <div className="flex items-center justify-center gap-5 ">
              <AiOutlineGithub
                size={25}
                className="hover:cursor-pointer hover:-translate-y-1 duration-300"
              />
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
