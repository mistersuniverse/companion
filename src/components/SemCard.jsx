import Tilt from 'react-parallax-tilt';

import COURSES from "../Courses";

const SemCard = ({ index, sem, icon, setActiveSem, activeCourse, setActive, activeSem }) => {

    return (
      <Tilt className='xs:w-[250px] w-full cursor-pointer'>
        <a href={` ${!(activeSem === sem) ? "#courses" : "#subjects"}` }>
        <div
          className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card object-contain flex flex-col'
          onClick={() => {
  
            if (COURSES[activeCourse][sem] === "coming soon"){
  
              alert("Not Uploaded Yet!");
            } else {
  
            setActiveSem(sem);
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
            className={` ${!(activeSem === sem) ? "bg-tertiary" : ""} rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col`}
            
          >
            <img
              src={icon}
              alt='web-developent'
              className="w-16 h-16 object-contain"
            />
  
            <h3 className='text-white text-[20px] font-bold text-center'>
              {sem.toUpperCase()}
            </h3>
  
          </div>
        </div>
        </a>
      </Tilt>
    );
  };
  
export default SemCard;