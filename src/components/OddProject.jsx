import { motion } from "framer-motion";

const OddProject = ({
  title,
  subTitle,
  img,
  description,
  technologies,
  liveLink,
  codeLink,
}) => {
  return (
    <div className="w-[90%] mx-auto lg:flex gap-5  justify-between max-w-6xl">
      <div className="mx-auto mb-8 lg:mb-0">
        <div className="max-w-sm     ">
          <img src={img} alt="project " className="w-full h-full  " />
          <div className="pt-5 flex items-center justify-center gap-4">
            <a
              href={liveLink}
              target="_blank"
              className="cursor-pointer hover:underline">
              live
            </a>
            <a
              href={codeLink}
              target="_blank"
              className="cursor-pointer hover:underline">
              code
            </a>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">{title}</h1>
        <h4 className="font-medium text-xl mb-2">{subTitle}</h4>
        <p className="mb-4 ">{description}</p>
        <p>
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </p>
      </div>
    </div>
  );
};
export default OddProject;
