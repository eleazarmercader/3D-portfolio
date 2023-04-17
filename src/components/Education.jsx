import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { courses } from "../constants";

const EducationCard = ({
  index,
  course,
  center,
  year,
}) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-black-200 p-8 rounded-3xl xs:w-[230px] w-full mt-2 shadow-card'
    >

      <div className='mt-1 min-h-[150px]'>
        <p className='text-white tracking-wider font-bold text-[20px] min-h-[60px]'>{course}</p>

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-light text-[14px]'>
              {center}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {year}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
    </Tilt>
);

const Education = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What I've learned</p>
          <h2 className={styles.sectionHeadText}>Education</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-1`}>
        {courses.map((course, index) => (
          <EducationCard key={course.name} index={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");