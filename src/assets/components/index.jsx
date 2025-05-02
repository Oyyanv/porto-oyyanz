import React from 'react';
import Squares from '../../../Reactbit/Squares/Squares';
import BlurText from '../../../Reactbit/BlurText/BlurText';

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
            text="Vestia Oyyan"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="xl:text-9xl text-6xl font-Questrial drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          />
        </div>
      </div>

      {/* about section */}
      <section className="relative z-20 bg-[#1A1A1D] text-white min-h-screen flex flex-col items-center justify-center px-8 py-16">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-3xl text-lg text-center">
          I'm a passionate developer focused on delivering elegant front-end experiences. I enjoy blending technology with creativity to craft engaging and interactive UIs.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;
