import { motion } from "framer-motion";
import EvenProject from "./EvenProject";
import OddProject from "./OddProject";
import collectiqueImg from "../assets/collectiqueimg.png";
import iCraveImg from "../assets/icraveimg.png";
import roxilerImg from "../assets/roxilerImg.jpg";
import cryptoTaxMateImg from "../assets/cryptoTaxMateImg.png";
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
                "Taiwlind CSS",
                "daisyUI",
                "React Router",
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
            className="py-10  bg-gradient-to-l from-violet-400 to-violet-500 rounded-md mb-20"
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
              subTitle="A food delivery app that lets you order your favorite food made with config driven UI using Swiggy's live API."
              technologies={[
                "React",
                "Tailwind CSS",
                "Redux-Toolkit",
                "React Router",
              ]}
              liveLink={"https://icrave.netlify.app/"}
              codeLink={"https://github.com/karthik-mohan23/iCrave"}
            />
          </motion.div>
          {/* Transactify */}
          <motion.div
            className="py-10  bg-gradient-to-r from-green-300 via-green-400 to-green-500 rounded-md mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <OddProject
              img={roxilerImg}
              title="Transactify"
              subTitle="This MERN app enhances data processing via aggregation and server pagination, seamlessly integrating with MongoDB for intuitive exploration of product transactions and dynamic statistic generation with personalized search."
              technologies={[
                "React",
                "Taiwlind CSS",
                "daisyUI",
                "React Router",
                "Nodejs",
                "Expressjs",
                "MongoDB",
              ]}
              liveLink={"https://roxiler-internship.onrender.com/"}
              codeLink={"https://github.com/karthik-mohan23/roxiler"}
            />
          </motion.div>
          {/* CryptoTaxMate */}
          <motion.div
            className="py-10 bg-gradient-to-l from-sky-400 to-blue-500 rounded-md mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}>
            <EvenProject
              img={cryptoTaxMateImg}
              title="CryptoTaxMate"
              subTitle="A user-friendly single-page app for estimating cryptocurrency gains and tax liabilities, simplifying the calculation process based on user-input financial data."
              technologies={["React", "Tailwind CSS"]}
              liveLink={"https://koinx-crypto-tax-calculator.netlify.app/"}
              codeLink={
                "https://github.com/karthik-mohan23/Frontend-Intern-Assignment"
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
