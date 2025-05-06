import React from 'react';
import Squares from '../../../Reactbit/Squares/Squares';
import BlurText from '../../../Reactbit/BlurText/BlurText';
import Lanyard from '../components/Lanyard/Lanyard';


const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const LandingPage = () => {
  return (
    <div className="relative w-screen overflow-x-hidden overflow-y-auto">
      {/* background (canvas) */}
      <div className="absolute inset-0 z-0">
        <Squares />
      </div>

      {/* gradient overlays */}
      <div className="pointers-event-none absolute top-0 left-0 w-full h-32 z-10 bg-gradient-to-b from-[#1A1A1D] to-transparent rounded-b-[100px] shadow-inner" />
      <div className="pointers-event-none absolute top-0 left-0 w-full h-32 z-10 bg-gradient-to-b from-[#1A1A1D] to-transparent rounded-b-[100px] shadow-inner" />
      <div className="pointers-event-none absolute bottom-0 left-0 w-full h-32 z-10 bg-gradient-to-t from-[#1A1A1D] to-transparent rounded-t-[100px] " />
      <div className="pointers-event-none absolute bottom-0 left-0 w-full h-32 z-10 bg-gradient-to-t from-[#1A1A1D] to-transparent rounded-t-[100px] " />

      {/* konten utama */}
      <div className="relative min-h-screen z-20 flex items-center justify-center text-white text-center pointer-events-none">
        <div>
          <BlurText
            text="Oyyan"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="xl:text-9xl text-6xl font-Questrial drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          />
        </div>
      </div>

      {/* about section */}
      <section className="relative z-20 bg-[#1A1A1D] text-white min-h-screen flex flex-row">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1A1A1D] to-transparent z-10 pointer-events-none" />
        {/* Kolom Kiri */}
        <div className="w-1/2 flex items-center justify-center border-r border-white">
         <Lanyard 
         position={[0, 0, 20]}
         gravity={[0, -40, 0]}
         fov={20}/>
        </div>

       {/* Kolom Kanan */}
        <div className="w-1/2 flex flex-col items-center justify-center text-center px-8">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg">This is a short description about Oyyan.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
