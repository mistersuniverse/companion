import React, { useState } from "react";

import { dropdown } from "../assets";
import { styles }  from "../styles";

import COURSES from "../Courses";

const CourseMenu = ({ activeCourse, setActiveCourse, setActiveIndex, setActiveSem }) => {
    const [active, setActive ] = useState(false);
    const courses = Object.keys(COURSES);
  
    return (
      <div>
  
        <div className="flex items-center gap-1 ">
          <div 
            className={` ${styles.sectionHeadText} flex items-center cursor-default`} 
          >
            { !active? activeCourse.toUpperCase() : 
              <input 
                type="search" 
                className="xs:w-[230px] w-full rounded-xl max-h-10 text-sm font-light py-5 px-6"
                placeholder={"type your course"}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    if (courses.find((course) => (event.target.value.toLowerCase() === course)) === undefined) {
                      alert("Invalid Course or This Course is not Added!")
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
          </div>
              
          <img 
            src={dropdown} alt="dropdown" 
            className={`${active?"rotate-180 animate-pulse":"animate-bounce" } sm:w-[65px]   sm:h-[65px]  w-[55px] h-[55px] cursor-pointer   `}
            onClick={() => {
              setActive(!active);
            }
            }
          />
            
        </div>
        
        <div className={`${ !active ? "hidden": "relative" } top-2 xs:max-w-[280px] h-[200px] w-full black-gradient rounded-xl z-20 leading-8 overflow-y-scroll`}>
          {courses.map((course, index) => (
            <div 
              className={`cursor-pointer hover:border py-1 px-5 ${ activeCourse.toLowerCase() === course.toLowerCase() ? "font-bold" : ""}`}
              key={index}
              onClick={() => {
                if (COURSES[course.toLocaleLowerCase()] === "coming soon") {
                  alert("This Course is not Added Yet!")
                } else {
                setActiveCourse(course.toLowerCase());
                setActive(!active);
                setActiveIndex(0);
                setActiveSem(COURSES[course]["activeSem"]);
                console.log(COURSES[course]["activeSem"])
                }
              }}
            >
              {course.toUpperCase()}
            </div>
          ))}
        </div>
  
      </div>
    )
}

export default CourseMenu;