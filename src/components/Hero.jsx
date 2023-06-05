import React from 'react';

import { styles } from '../styles';

const Hero = () => {
  return (
    <section className='h-screen w-full relative mx-auto'>
      <div
        className={` relative top-[8rem] max-w-7xl mx-auto ${styles.paddingX} flex items-start gap-5`}
      >
        <div className='flex flex-col items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]'></div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>

        <div>
          <h1 className={` ${styles.heroHeadText} text-white`}>
            Welcome To <span className='text-[#915EFF] '>Resourcia</span>
          </h1>
          <p className={` ${styles.heroSubText}`}>Your Only College Companion</p>
        </div>
      </div>
    </section>
  )
}

export default Hero