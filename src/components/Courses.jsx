import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';

import { SectionWrapper } from '../hoc';

import { styles }  from "../styles";
import { semesters } from "../constants";
import { fadeIn,textVariant } from "../utils/motion";
import { Subjects } from "../components";
import { dropdown } from "../assets";
import { act } from "@react-three/fiber";


const CourseMenu = ({ activeCore, setActiveCore, setActiveCourse, setActiveCard, setActiveIndex }) => {
  const [active, setActive ] = useState(false);

  const courses = ["bms", "bcom", "BA", "BTECH", "BCA"];
  return (
    <div>
      <h2 
        className={` ${styles.sectionHeadText} flex items-start gap-2`} 
      >
        { !active? activeCore : 
          <input 
            type="search" 
            className="relative top-2 xs:w-[230px] w-10/12  rounded-xl max-h-10 text-sm font-light py-5 px-6"
            placeholder={"type your course"}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                setActiveCore(event.target.value)
                setActiveCourse(`${event.target.value}_sem1`)
                setActive(false)};
                setActiveCard(0);
                setActiveIndex(0)
              }}
          >
          </input>}
          
          <img 
            src={dropdown} alt="dropdown" 
            className={` ${active?"rotate-180 w-[45px] relative top-1": " relative top-4 lg:w-[55px] sm:w-[60px] xs:w-[50px] w-[40px] lg:h-[55px] sm:h-[60px] xs:h-[50px] h-[40px]"}`}
            onClick={() => {
              setActive(!active);
            }}
          />
      </h2>
      
      <div className={`${ !active ? "hidden": "relative" } top-5 xs:max-w-[280px] w-full black-gradient rounded-xl z-20 py-3 px-5 leading-8`}>
        {courses.map((course) => (
          <div 
            onClick={() => {
              setActiveCore(course);
              setActiveCourse(`${course}_sem1`)
              setActive(!active);
              setActiveCard(0)
              setActiveIndex(0)
            }}
          >
            {course}
          </div>
        ))}
      </div>

    </div>
  )
}

const Card = ({ index, title, icon, setActiveCard, activeCard, setActiveCourse, activeCore,setActive }) => {

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <div
        variants={fadeIn("right", "spring", index*0.5, 0.75)} // (direction, type, delay, duration)
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card object-contain flex flex-col'
        onClick={() => {
          setActiveCard(index);
          const course = `${activeCore}_${title}`;
          setActiveCourse(course);
          setActive(0)
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
      </div>
    </Tilt>
  );
};

const Courses = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [activeCore, setActiveCore] = useState("bms");
  const [active, setActive] = useState(0);
  const [activeCourse, setActiveCourse ] = useState(`${activeCore}_sem1`)

  
  return (
    <div className="">
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Courses</p>
        <CourseMenu activeCore={activeCore} setActiveCore={setActiveCore} setActiveCourse={setActiveCourse} setActiveCard={setActiveCard} setActiveIndex={setActive}/>
      </div>

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
            activeCore={activeCore}
            setActive={setActive}
          />
        ))}
      </div>

      <Subjects activeCourse={activeCourse} active={active} setActive={setActive}/>
    </div>
  );
};

export default SectionWrapper(Courses, "courses");
