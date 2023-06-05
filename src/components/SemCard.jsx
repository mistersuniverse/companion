import Tilt from 'react-parallax-tilt';

import COURSES from "../Courses";

const SemCard = ({ index, title, icon, setActiveSem, activeCourse, setActive, activeSem }) => {

    return (
      <Tilt className='xs:w-[250px] w-full'>
        <div
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
  
export default SemCard;