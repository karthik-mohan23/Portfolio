const Projects = () => {
  return (
    <section className="bg-primary py-20">
      <div className="w-[90%] max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-f-primary font-semibold pb-6">
          Projects
        </h2>
        <div className="border border-f-primary px-10 bg-secondary py-20">
          <div className="flex flex-wrap justify-between gap-10">
            <div className="w-80 h-40 border  border-f-primary "></div>
            <div>
              <h1>Title</h1>
              <p>Description</p>
              <p>Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
