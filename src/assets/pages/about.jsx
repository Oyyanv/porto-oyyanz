import React from 'react';
import Lanyard from '../components/Lanyard/Lanyard';
import BlurText from '../../../Reactbit/BlurText/BlurText';

const About = () => {
  return (
    <section id="about" className="relative w-screen h-screen flex items-center justify-center">

      {/* background text */}
      <div className='absolute text-[14rem] mb-[25%] font-Lexend font-light text-white/10 select-none z-0'>
        <div className='hidden xl:block'>
          <BlurText
            text="ABOUT ME"
            animateBy='letters'
            direction='top'
            delay={100}
            className='inline-block '
          />
        </div>

        <div className="flex flex-col mb-[18rem] items-center xl:hidden">
          <BlurText
            text="ABOUT"
            animateBy="letters"
            direction="top"
            delay={200}
            className="font-Lexend font-light text-white/5 text-[5rem] select-none text-center"
          />
          <BlurText
            text="ME"
            animateBy="letters"
            direction="top"
            delay={1000}
            className="font-Lexend font-light text-white/5 text-[5rem] select-none text-center"
          />
        </div>
      </div>

      {/* foreground content */}
      <div className="h-screen w-screen relative z-10 flex flex-col items-center">
        <Lanyard
          position={[0, 0, 20]}
          gravity={[0, -40, 0]}
          fov={17}
        />
      </div>
    </section>
  );
};

export default About;
