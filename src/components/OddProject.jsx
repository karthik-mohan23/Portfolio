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
    <div className="w-[90%] mx-auto lg:flex gap-16  justify-between max-w-6xl">
      <div className="mx-auto mb-8 lg:mb-0">
        <div className="max-w-md">
          <img src={img} alt="project " className="w-full h-full  py-2" />
          <div className="pt-5 flex items-center justify-center gap-4">
            <a
              href={liveLink}
              target="_blank"
              className="cursor-pointer hover:underline font-medium text-xl">
              live
            </a>
            <a
              href={codeLink}
              target="_blank"
              className="cursor-pointer hover:underline font-medium text-xl">
              code
            </a>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">{title}</h1>
        <h4 className="font-medium text-xl mb-4">{subTitle}</h4>
        <p className="flex gap-2 flex-wrap">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="border border-blue-300 bg-gray-200 rounded-md p-1 font-semibold">
              {tech}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};
export default OddProject;
