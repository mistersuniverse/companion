import React, { useState, useEffect } from "react";
import Tilt from 'react-parallax-tilt';

import { SectionWrapper } from '../hoc';
import { styles }  from "../styles";
import { semesters } from "../constants";
import { fadeIn,textVariant } from "../utils/motion";
import { Subjects } from "../components";
import { dropdown } from "../assets";

import COURSES from "../Courses";


const CourseMenu = ({ activeCourse, setActiveCourse, setActiveCard, setActiveIndex, setActiveSem }) => {
  const [active, setActive ] = useState(false);
  const courses = Object.keys(COURSES);

  return (
    <div>
      <h2 
        className={` ${styles.sectionHeadText} flex items-start gap-2`} 
      >
        { !active? activeCourse.toUpperCase() : 
          <input 
            type="search" 
            className="relative top-2 xs:w-[230px] w-10/12  rounded-xl max-h-10 text-sm font-light py-5 px-6"
            placeholder={"type your course"}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                
                if (courses.find((course) => (event.target.value === course)) === undefined) {
                  
                  alert("Invalid Course or this Course is not added yet!")
                } else {
                  console.log(courses.find((course) => (event.target.value.toUpperCase() === course)))
                  setActiveCourse(event.target.value.toLowerCase())
                  setActive(false);
                  setActiveCard(0);
                  setActiveIndex(0);
                  setActiveSem("sem1");
                }
              }
              }}
          >
          </input>}
          
          <img 
            src={dropdown} alt="dropdown" 
            className={` ${active?"rotate-180 w-[45px] relative top-1": " relative top-4 lg:w-[55px] sm:w-[60px] xs:w-[50px] w-[40px] lg:h-[55px] sm:h-[60px] xs:h-[50px] h-[40px]"}`}
            onClick={() => {
              setActive(!active);
            }
            }
          />
      </h2>
      
      <div className={`${ !active ? "hidden": "relative" } top-5 xs:max-w-[280px] w-full black-gradient rounded-xl z-20 py-3 px-5 leading-8`}>
        {courses.map((course, index) => (
          <div 
            key={index}
            onClick={() => {
              setActiveCourse(course.toLowerCase());
              setActive(!active);
              setActiveCard(0);
              setActiveIndex(0);
              setActiveSem("sem1");
            }}
          >
            {course.toUpperCase()}
          </div>
        ))}
      </div>

    </div>
  )
}

const Card = ({ index, title, icon, setActiveCard, activeCard, setActiveSem, activeCourse, setActive }) => {

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <div
        variants={fadeIn("right", "spring", index*0.5, 0.75)} // (direction, type, delay, duration)
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card object-contain flex flex-col'
        onClick={() => {

          if (COURSES[activeCourse][title] === "coming soon"){

            alert("not uploaded yet!");
          } else {

          setActiveCard(index);
          setActiveSem(title);
          setActive(0);
          }
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
  const [active, setActive] = useState(0);
  const [activeCourse, setActiveCourse ] = useState("bms")
  const [activeSem, setActiveSem] = useState("sem1");

  return (
    <div className="">
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Courses</p>
        <CourseMenu activeCourse={activeCourse} setActiveCourse={setActiveCourse} setActiveSem={setActiveSem} setActiveCard={setActiveCard} setActiveIndex={setActive}/>
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
            setActiveSem={setActiveSem}
            activeCourse={activeCourse}
            setActive={setActive}
          />
        ))}
      </div>
      
      <Subjects activeCourse={activeCourse} active={active} activeSem={activeSem} setActive={setActive}/>
    </div>
  );
};

export default SectionWrapper(Courses, "courses");
