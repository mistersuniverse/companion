import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';

import { SectionWrapper } from '../hoc';

import { styles }  from "../styles";
import { semesters } from "../constants";
import { fadeIn,textVariant } from "../utils/motion";
import { Subjects } from "../components";


const Card = ({ index, title, icon, setActiveCard, activeCard, setActiveCourse, activeCourse }) => {

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index*0.5, 0.75)} // (direction, type, delay, duration)
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        onClick={() => {
          setActiveCard(index);
          // setActiveCourse(course);
        }}
      >
        <div
          options={{
            max: 45, 
            scale: 1,
            speed: 450,
          }}
          className={` ${!(activeCard === index) ? "bg-tertiary" : ""} rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col`}
          
        >
          <img
            src={icon}
            alt='web-developent'
            className="w-16 h-16 object-contain"
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title.toUpperCase()}
          </h3>

        </div>
      </motion.div>
    </Tilt>
  );
};

const Courses = () => {
  const [activeCard, setActiveCard] = useState(1);
  const [activeCourse, setActiveCourse] = useState("bms_sem2")

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Courses</p>
        <h2 className={styles.sectionHeadText}>BMS.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap flex-col sm:flex-row justify-between gap-8 mb-32'>
        {semesters.map((semester, index) => (
          <Card
            key={semester.title}
            index={index}
            title={semester.title}
            icon={semester.icon}
            setActiveCard={setActiveCard}
            activeCard={activeCard}
            setActiveCourse={setActiveCourse}
            activeCourse={activeCourse}
          />
        ))}
      </div>

      {/* <Subjects activeCourse={activeCourse}/> */}
    </>
  );
};

export default SectionWrapper(Courses, "courses");
