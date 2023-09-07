import { technologies } from "../utils/constants";

const Skills = () => {
  return (
    <section name="skills" className="bg-primary py-24">
      <div className="w-[90%] max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-f-primary font-semibold pb-6">
          Skills
        </h2>
        <div className="border border-f-primary rounded-lg px-10 bg-secondary grid">
          <div className="grid grid-cols-3 justify-items-center md:grid-cols-3 lg:grid-cols-5 gap-y-14 py-10 md:py-20">
            {technologies.map((tech, index) => {
              return (
                <div key={index} className="w-20 md:w-32 ">
                  <div className="mb-4 border-[3px] border-f-primary  rounded-lg p-5 h-20 md:h-32">
                    <img src={tech.image} alt={tech.title} />
                  </div>
                  <p className="text-center font-semibold md:text-xl">
                    {tech.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
