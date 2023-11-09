import { motion } from "framer-motion";
import EvenProject from "./EvenProject";
import collectiqueImg from "../assets/collectiqueimg.png";
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
          {/* collectique */}
          <motion.div
            className="py-10 bg-gradient-to-r from-yellow-200 to-yellow-500 rounded-md mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <OddProject
              img={collectiqueImg}
              title="Collectique"
              subTitle="Collectique is an ecommerce website that sells vintage and traditional handcrafted products."
              technologies={[
                "React",
                "TaiwlindCSS",
                "daisyUI",
                "Lottie files",
                "Nodejs",
                "Expressjs",
                "MongoDB",
              ]}
              liveLink={"https://collectique.onrender.com/"}
              codeLink={"https://github.com/karthik-mohan23/collectique"}
            />
          </motion.div>
          {/* iCrave */}
          <motion.div
            className="py-10 bg-gradient-to-r from-sky-400 to-blue-500 rounded-md mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <EvenProject
              img={iCraveImg}
              title="iCrave"
              subTitle="A food delivery app that lets you order your favorite food made with config driven UI using Swiggy's live API"
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
        </div>
      </div>
    </section>
  );
};
export default Projects;
