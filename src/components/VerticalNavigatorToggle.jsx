import { motion } from "framer-motion";
import { arrowdown } from "../assets";

const VerticalNavigatorToggle = ({id, direction}) => (
    <div className='xs:bottom-10 bottom-32 w-full flex justify-center items-center sm:hidden'>
        <a href={`#${id}`}>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary sm:flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full  mb-1'
            >
            <img src={ arrowdown } alt="arrow" className={ direction === "up" ? "rotate-180" : "" } />

            </motion.div>
          </div>
        </a>
      </div>
)

export default VerticalNavigatorToggle;