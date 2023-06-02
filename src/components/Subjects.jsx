import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';

import { SectionWrapper } from '../hoc';

import { Courses } from "../constants";
import { fadeIn } from "../utils/motion";
import { Subject } from "../components";

const Card = ({index, title, setActive, active}) => {

  return (
  <Tilt className='xs:w-[250px] w-full'>
    <div
      variants={fadeIn("right", "spring", index*0.5, 0.75)} // (direction, type, delay, duration)
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card object-contain'
      onClick={() => {
        setActive(index);
      }}
    >
        <div
          options={{
            max: 45, 
            scale: 1,
            speed: 450,
          }}
          className={` ${!(active === index) ? "bg-tertiary" : ""} rounded-[20px] py-5 px-12 min-h-[140px] flex items-center justify-center`} 
          
        >
          <h3 className='text-white text-[20px] font-bold text-center break-words'>
            {title.replace(/[_]/g, " ").toUpperCase()}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};

const Subjects = ({activeCourse}) => {
  const [active, setActive] = useState(0);

  var course = Courses[activeCourse]
  var subjects_of_the_course = Object.keys(course);
  var activeSubject = subjects_of_the_course[active];

  console.log(activeCourse)
  return (
  
  <div className="flex flex-col gap-40 items-center ">
    <div className="flex justify-between items-center flex-wrap gap-4">
      {subjects_of_the_course.map((Subject,index) => (
          <Card 
            index={index} 
            title={Subject}
            active={active}
            setActive={setActive}
          />
      ))}
    </div>
    <Subject 
      activeCourse={activeCourse}
      activeSubject={activeSubject}
    />
  </div>
)};

export default Subjects;