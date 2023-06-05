import React from "react";

import ContentCard from "./ContentCard";

import COURSES from "../Courses";

const Card = ({course, subject, syllabus, short_notes, short_course, long_course, books, pyqs}) => (
    
      <div
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
          <div
            options={{
              max: 45, 
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary rounded-[20px] sm:py-5 py-3 lg:px-[5rem] px-8 w-full' 
          > 
            <h1 className="text-white sm:text-[40px] text-[32px] font-bold text-center pb-8'"> 
                {course.replace(/[_]/g, " ").toUpperCase()}<br/>{subject.replace(/[_]/g, " ").toUpperCase()}
            </h1>

            <div className="flex items-center justify-center">
            <hr className="w-11/12"></hr>
            </div>

            <div className="py-12">
                <div className="flex justify-between"> 
                {syllabus.content.map((content, index) => (
                    <div 
                      key={index} 
                      className="min-w-full green-pink-gradient p-3 rounded-lg sm:text-lg text-sm break-words cursor-pointer"
                      onClick={() => {
                        if (content.title !== "coming soon") {
                        window.open(content.link, "_blank");
                        }
                      }}
                    >
                        <a href={content.link} target={!(content.title === "coming soon")? "_blank": ""}>{content.title}</a>
                    </div>
                ))}
                </div>
            </div>
            
            
            <ContentCard element={short_notes} />
            <ContentCard element={short_course} />
            <ContentCard element={long_course} />
            <ContentCard element={books} />
            <ContentCard element={pyqs} />
            
          </div>
        </div>
    
);

const Subject = ({activeCourse, activeSem, activeSubject}) => {

    return (
    <div className=" w-full sm:w-10/12">   
        <Card key="subjectCard" {...COURSES[activeCourse][activeSem][activeSubject]} course={activeCourse} subject={activeSubject}/>
    </div>
    )
};

export default Subject;