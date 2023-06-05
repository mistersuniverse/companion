import React from "react";
import Tilt from 'react-parallax-tilt';

import { Subject } from "../components";

import COURSES from "../Courses";

const Card = ({index, title, setActive, active}) => {

  return (
  <Tilt className='xs:w-[250px] w-full cursor-pointer'>

    <div
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

const Subjects = ({activeCourse, activeSem, active, setActive}) => {
  
  var course = COURSES[activeCourse];
  var subjects_of_the_course = Object.keys(course[activeSem]);
  var activeSubject = subjects_of_the_course[active];

  return (
  
  <div className="flex flex-col gap-40 items-center ">

    <div className="flex justify-between items-center flex-wrap gap-4">
      {subjects_of_the_course.map((Subject,index) => (
          <Card 
            key={Subject}
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
      activeSem={activeSem}
    />

  </div>
)};

export default Subjects;