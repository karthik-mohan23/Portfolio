import { motion } from "framer-motion";
import EvenProject from "./EvenProject";
import OddProject from "./OddProject";
import iCraveImg from "../assets/icraveimg.jpg";

const Projects = () => {
  return (
    <section name="projects" className="bg-primary py-24">
      <div className="w-[90%] max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-f-primary font-semibold pb-6">
          Projects
        </h2>
        <div className="lg:pt-10">
          <motion.div
            className="py-10 bg-violet-300 rounded-md mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <OddProject
              img={iCraveImg}
              title="iCrave"
              subTitle="food delivery app that lets you order your favorite food"
              description="A food delivery app made with config driven ui using swiggy's live API"
              technologies={[
                "React",
                "Tailwind",
                "Redux-Toolkit",
                "React Router",
              ]}
              liveLink={"https://icrave.netlify.app/"}
              codeLink={"https://github.com/karthik-mohan23/iCrave"}
            />
          </motion.div>

          <motion.div
            className="py-10 bg-yellow-200 rounded-md mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <EvenProject
              title="Ignite"
              subTitle="create your own create-react-app"
              description="build your own create-react-app"
              technologies={["React"]}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
