import React from "react";
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

import { styles } from '../styles';
import { semesters } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

const Card = ({index, title, icon}) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index*0.5, 0.75)} // (direction, type, delay, duration)
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
        <div
          options={{
            max: 45, 
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col' 
        >
          <img
            src={icon}
            alt='web-developent'
            className="w-16 h-16 object-contain"
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>

        </div>
      </motion.div>
  </Tilt>
);

const Courses = () => (
    <>
        <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Courses</p>
        <h2 className={styles.sectionHeadText}>BMS.</h2>
        </motion.div>

        <div className='mt-20 flex flex-wrap justify-between '>
        {semesters.map((sem, index) => ( 
            <Card key={sem.title} index={index} {...sem} />
        ))}
        </div>
    </>
);

export default SectionWrapper(Courses,"courses");