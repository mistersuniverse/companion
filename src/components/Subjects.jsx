import React from "react";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';

import { SectionWrapper } from '../hoc';

import { Courses } from "../constants";
import { fadeIn } from "../utils/motion";

var subjects_of_the_course = Object.keys(Courses.bms_sem2);

const Card = ({index, title}) => (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index*0.5, 0.75)} // (direction, type, delay, duration)
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card object-contain'
      >
          <div
            options={{
              max: 45, 
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[80px]' 
          >
            <h3 className='text-white text-[20px] font-bold text-center break-words'>
              {title}
            </h3>
  
          </div>
        </motion.div>
    </Tilt>
);

const Subjects = () => (
    <div className="flex justify-between items-center flex-wrap gap-4">
        {subjects_of_the_course.map((Subject,index) => (
            <Card index={index} title={Subject.replace(/[_]/g, " ").toUpperCase()}/>
        ))}
    </div>
);

export default SectionWrapper(Subjects, "subjects");