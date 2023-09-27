import { technologies } from "../utils/constants";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section name="skills" className="bg-primary py-24">
      <div className="w-[90%] max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-f-primary font-semibold pb-6">
          Skills
        </h2>
        <div className="border border-f-primary rounded-lg px-5 md:px-10 bg-secondary grid">
          <div className="grid grid-cols-2 justify-items-center  sm:grid-cols-3 lg:grid-cols-5 gap-y-14 py-10 md:py-20">
            {technologies.map((tech, index) => {
              return (
                <motion.div
                  className="w-20 md:w-32"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}>
                  <div className="mb-4 border-[1px] md:border-[3px] border-f-primary  rounded-lg p-1 md:p-5 h-20 md:h-32">
                    <img src={tech.image} alt={tech.title} />
                  </div>
                  <p className="text-center font-semibold md:text-xl">
                    {tech.title}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
