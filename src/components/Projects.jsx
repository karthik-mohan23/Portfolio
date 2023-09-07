import EvenProject from "./EvenProject";
import OddProject from "./OddProject";

const Projects = () => {
  return (
    <section name="projects" className="bg-primary py-20">
      <div className="w-[90%] max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-f-primary font-semibold pb-6">
          Projects
        </h2>
        <div className="border border-f-primary px-10 bg-secondary py-20">
          <OddProject
            title="iCrave"
            subTitle="food delivery app that lets you order your favorite food"
            description="A food delivery app made with config driven ui using swiggy's live API"
            technologies={[
              "React",
              "Tailwind",
              "Redux-Toolkit",
              "React Router",
            ]}
          />
          <EvenProject
            title="iGnite"
            subTitle="create your own create-react-app"
            description="build your own create-react-app"
            technologies={["React"]}
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
