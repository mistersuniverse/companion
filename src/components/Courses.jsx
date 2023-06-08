import React, { useState } from "react";

import { SectionWrapper } from '../hoc';
import { styles }  from "../styles";
import { semesters } from "../constants";
import { textVariant } from "../utils/motion";
import { Subjects } from "../components";
import CourseMenu from "./CoursesMenu";
import SemCard from "./SemCard";

import COURSES from "../Courses";


const Courses = () => {
  const [active, setActive] = useState(0);
  const [activeCourse, setActiveCourse ] = useState("bms")
  const [activeSem, setActiveSem] = useState(COURSES[activeCourse]["activeSem"]);

  return (
    <div className="">
      <div variants={textVariant()}>
        <p className={`${styles.sectionSubText} cursor-default`}>Choose Your Course Below.</p>
        <CourseMenu activeCourse={activeCourse} setActiveCourse={setActiveCourse} setActiveSem={setActiveSem} setActiveIndex={setActive}/>
      </div>

      <div className='mt-20 flex flex-wrap flex-col sm:flex-row justify-between gap-8 mb-32'>
        {semesters.map((semester, index) => (
          <SemCard
            key={semester.sem}
            index={index}
            sem={semester.sem}
            icon={semester.icon}
            setActiveSem={setActiveSem}
            activeCourse={activeCourse}
            setActive={setActive}
            activeSem={activeSem}
          />
        ))}
      </div>
      
      <span className='hash-span' id="subjects">
          &nbsp;
      </span>
      <Subjects activeCourse={activeCourse} active={active} activeSem={activeSem} setActive={setActive}/>
    </div>
  );
};

export default SectionWrapper(Courses, "courses");
