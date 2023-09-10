const EvenProject = ({ title, subTitle, img, description, technologies }) => {
  return (
    <div className="w-[90%] mx-auto lg:flex gap-5  justify-between max-w-6xl">
      <div className="mx-auto mb-8 lg:mb-0">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">{title}</h1>
        <h4 className="font-medium text-xl mb-2">{subTitle}</h4>
        <p className="mb-4 ">{description}</p>
        <p>
          {technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </p>
      </div>
      <div className="max-w-sm  border border-black mx-auto   ">
        <img src={img} alt="project " className="w-80 h-52 pb-5" />
        <div className="flex items-center justify-center gap-4">
          <span className="cursor-pointer hover:underline">live</span>
          <span className="cursor-pointer hover:underline">code</span>
        </div>
      </div>
    </div>
  );
};
export default EvenProject;
