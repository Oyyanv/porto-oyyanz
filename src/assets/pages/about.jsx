import React from 'react';
import Lanyard from '../components/Lanyard/Lanyard';

const About = () => {
  return (
    <section id="about">
      <div className='w-screen h-screen flex items-center justify-center'>
        <Lanyard 
        position={[0, 0, 20]}
        gravity={[0, -40, 0]}
        fov={18}  />
      </div>
    </section>
  );
};

export default About;