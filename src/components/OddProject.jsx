const OddProject = ({ title, subTitle, img, description, technologies }) => {
  return (
    <div className="flex flex-wrap justify-between  max-w-5xl mx-auto mb-10">
      <div className="w-80 h-48 border  border-f-primary "></div>
      <div>
        <h1>{title}</h1>
        <h4>{subTitle}</h4>
        <p>{description}</p>
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
