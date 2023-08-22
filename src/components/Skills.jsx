import { technologies } from "../utils/constants";

const Skills = () => {
  console.log(technologies);
  return (
    <section className="bg-primary">
      <div className="w-[90%] max-w-7xl mx-auto bg-white">
        <div>
          <div></div>
          <div>
            {technologies.map((tech, index) => {
              return (
                <div key={index}>
                  <img src={tech.image} alt={tech.title} />
                  <p>{tech.title}</p>
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
