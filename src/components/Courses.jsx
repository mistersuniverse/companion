import React, { useState, useEffect } from "react";
import Tilt from 'react-parallax-tilt';

import { SectionWrapper } from '../hoc';
import { styles }  from "../styles";
import { semesters } from "../constants";
import { textVariant } from "../utils/motion";
import { Subjects } from "../components";
import { dropdown } from "../assets";

import COURSES from "../Courses";

const CourseMenu = ({ activeCourse, setActiveCourse, setActiveIndex, setActiveSem }) => {
  const [active, setActive ] = useState(false);
  const courses = Object.keys(COURSES);

  return (
    <div>

      <div className="flex items-center gap-1 ">
        <h2 
          className={` ${styles.sectionHeadText} flex items-center`} 
        >
          { !active? activeCourse.toUpperCase() : 
            <input 
              type="search" 
              className="xs:w-[230px] w-10/12  rounded-xl max-h-10 text-sm font-light py-5 px-6"
              placeholder={"type your course"}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  if (courses.find((course) => (event.target.value.toLowerCase() === course)) === undefined) {
                    alert("Invalid Course or This Course is not Added Yet!")
                  } else {
                    console.log(courses.find((course) => (event.target.value.toUpperCase() === course)))
                    setActiveCourse(event.target.value.toLowerCase())
                    setActive(false);
                    setActiveIndex(0);
                    setActiveSem(COURSES[event.target.value]["activeSem"]);
                  }
                }
                }}
            >
            </input>}
        </h2>
            
        <img 
          src={dropdown} alt="dropdown" 
          className={`${active?"rotate-180 ":"" } sm:w-[55px] xs-[45px]  sm:h-[55px] xs:h-[45px] w-[45px] h-[45px] `}
          onClick={() => {
            setActive(!active);
          }
          }
        />
          
      </div>
      
      <div className={`${ !active ? "hidden": "relative" } top-2 xs:max-w-[280px] w-full black-gradient rounded-xl z-20 py-3 px-5 leading-8`}>
        {courses.map((course, index) => (
          <div 
            key={index}
            onClick={() => {
              setActiveCourse(course.toLowerCase());
              setActive(!active);
              setActiveIndex(0);
              setActiveSem(COURSES[course]["activeSem"]);
              console.log(COURSES[course]["activeSem"])
            }}
          >
            {course.toUpperCase()}
          </div>
        ))}
      </div>

    </div>
  )
}

const Card = ({ index, title, icon, setActiveSem, activeCourse, setActive, activeSem }) => {

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <div
        // variants={fadeIn("right", "spring", index*0.5, 0.75)} // (direction, type, delay, duration)
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card object-contain flex flex-col'
        onClick={() => {

          if (COURSES[activeCourse][title] === "coming soon"){

            alert("Not Uploaded Yet!");
          } else {

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
          className={` ${!(activeSem === title) ? "bg-tertiary" : ""} rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col`}
          
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
  const [active, setActive] = useState(0);
  const [activeCourse, setActiveCourse ] = useState("bms")
  const [activeSem, setActiveSem] = useState(COURSES[activeCourse]["activeSem"]);

  return (
    <div className="">
      <div variants={textVariant()}>
        <p className={styles.sectionSubText}>Courses</p>
        <CourseMenu activeCourse={activeCourse} setActiveCourse={setActiveCourse} setActiveSem={setActiveSem} setActiveIndex={setActive}/>
      </div>

      <div className='mt-20 flex flex-wrap flex-col sm:flex-row justify-between gap-8 mb-32'>
        {semesters.map((semester, index) => (
          <Card
            key={semester.title}
            index={index}
            title={semester.title}
            icon={semester.icon}
            setActiveSem={setActiveSem}
            activeCourse={activeCourse}
            setActive={setActive}
            activeSem={activeSem}
          />
        ))}
      </div>
      
      <Subjects activeCourse={activeCourse} active={active} activeSem={activeSem} setActive={setActive}/>
    </div>
  );
};

export default SectionWrapper(Courses, "courses");
