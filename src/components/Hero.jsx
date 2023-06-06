import React from 'react';
import { motion } from "framer-motion";

import { styles } from '../styles';
import { MESSAGEFORAUDIENCE, VISION} from '../constants'
import VerticalNavigatorToggle from "./VerticalNavigatorToggle";

const Arrowdown = () => (
  <a href='#courses'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
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

            <img src={arrowdown} />
            </motion.div>
          </div>
        </a>
)

const Hero = () => {
  return (
    <section className='h-screen w-full relative mx-auto'>
      <div
        className={` relative top-[8rem] max-w-7xl mx-auto ${styles.paddingX} flex items-start gap-5`}
      >
        <div className='flex flex-col items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]'></div>
          <div className='w-1 sm:h-80 xs:h-40 h-[20rem] violet-gradient'></div>
        </div>

        <div>
          <h1 className={` ${styles.heroHeadText} text-white`}>
            Welcome To <span className='text-[#915EFF] animate-pulse'>Resourcia</span>
          </h1>
          <p className={` ${styles.heroSubText}`}>{ VISION }</p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex  flex-col justify-center items-center gap-2'>

        <div className='max-w-[1140px] sm:w-10/12 border rounded-xl py-4 px-8 mx-14 sm:mx-24 mb-4'>
          <a href='#courses'>
            <p className='font-bold text-[#915EFF] animate-pulse sm:text-lg xs:text-sm text-xs text-center  '>
              { MESSAGEFORAUDIENCE }
            </p>
          </a>
        </div>

        <VerticalNavigatorToggle />

      </div>
    </section>
  )
}

export default Hero