import React from "react";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';

import { SectionWrapper } from '../hoc';

import { Courses } from "../constants"; 
import { fadeIn } from "../utils/motion";

const subCard = ({index, title}) => (
    
    <div
      variants={fadeIn("right", "spring", index*0.5, 0.75)} // (direction, type, delay, duration)
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
        <div
          options={{
            max: 45, 
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[1000px] w-full' 
        >
          <h1 className='text-white text-[20px] font-bold text-center  w-full'>
            {title}
          </h1>

        </div>
      </div>
  
);

const Card = ({index, syllabus, short_notes, short_course, long_course, books, pyqs}) => (
    
      <div
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
          <div
            options={{
              max: 45, 
              scale: 1,
              speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-5 px-[5rem]  w-full' 
          >
            <div className="py-12">
                <div className="flex justify-between"> 
                {syllabus.content.map((content) => (
                    <div className="min-w-full green-pink-gradient p-3 rounded-lg text-lg">
                        <a href={content.link} target="_blank">{content.title}</a>
                    </div>
                ))}
                </div>
            </div>
            
            <div className="pb-12 mb-16">
                <h1 className='text-white text-[40px] font-bold text-center pb-8'>
                    {short_notes.title}
                </h1>
                <div className="flex justify-between flex-wrap gap-10"> 
                {short_notes.content.map((content) => (
                    <div className="sm:min-w-[45%] min-w-full green-pink-gradient p-3 rounded-lg text-lg">
                        <a href={content.link} target="_blank">{content.title}</a>
                    </div>
                ))}
                </div>
            </div>

            <div className="pb-12 mb-16">
                <h1 className='text-white text-[40px] font-bold text-center pb-8'>
                    {short_course.title}
                </h1>
                <div className="flex justify-between flex-wrap gap-10"> 
                {short_course.content.map((content) => (
                    <div className="sm:min-w-[45%] min-w-full green-pink-gradient p-3 rounded-lg text-lg">
                        <a href={content.link} target="_blank">{content.title}</a>
                    </div>
                ))}
                </div>
            </div>
            

            <div className="pb-12 mb-16">
                <h1 className='text-white text-[40px] font-bold text-center pb-8'>
                    {long_course.title}
                </h1>
                <div className="flex justify-between flex-wrap gap-10"> 
                {long_course.content.map((content) => (
                    <div className="sm:min-w-[45%] min-w-full green-pink-gradient p-3 rounded-lg text-lg">
                        <a href={content.link} target="_blank">{content.title}</a>
                    </div>
                ))}
                </div>
            </div>

            <div className="pb-12 mb-16">
                <h1 className='text-white text-[40px] font-bold text-center pb-8'>
                    {books.title}
                </h1>
                <div className="flex justify-between flex-wrap gap-10"> 
                {books.content.map((content) => (
                    <div className="sm:min-w-[45%] min-w-full green-pink-gradient p-3 rounded-lg text-lg">
                        <a href={content.link} target="_blank">{content.title}</a>
                    </div>
                ))}
                </div>
            </div>

            <div className="pb-12 mb-16">
                <h1 className='text-white text-[40px] font-bold text-center pb-8'>
                    {pyqs.title}
                </h1>
                <div className="flex justify-between flex-wrap gap-10"> 
                {pyqs.content.map((content) => (
                    <div className="sm:min-w-[45%] min-w-full green-pink-gradient p-3 rounded-lg text-lg">
                        <a href={content.link} target="_blank">{content.title}</a>
                    </div>
                ))}
                </div>
            </div>

  
          </div>
        </div>
    
);

const Subjects = () => (
    <div className="w-full">   
        <Card {...Courses["bms_sem2"]["micro_economics"]}/>
    </div>
);

export default SectionWrapper(Subjects, "subjects");