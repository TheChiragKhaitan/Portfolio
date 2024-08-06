import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Tech Stack</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center mt-10 gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} title={technology.name} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");