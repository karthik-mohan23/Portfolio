const EvenProject = ({
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
      <div className=" mb-8 lg:mb-0">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">{title}</h1>
        <h4 className="font-medium text-xl mb-4 ">{subTitle}</h4>
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
      <div className="max-w-sm   me-10 pb-6  ">
        <img src={img} alt="project " className="w-full h-full pb-2 " />
        <div className=" flex items-center justify-center gap-4 mt-3">
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
  );
};
export default EvenProject;
