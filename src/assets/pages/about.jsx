import React from 'react';
import Lanyard from '../components/Lanyard/Lanyard';

const About = () => {
  return (
    <section id="about" className="relative w-screen h-screen flex items-center justify-center">
      
      {/* background text */}
      <h1 className="absolute xl:text-[14rem] xl:mb-[20%] text-[5rem] mb-[22rem] font-Lexend font-light text-center text-white/5 select-none z-0">
        ABOUT ME
      </h1>

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
