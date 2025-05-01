import React from 'react';
import Squares from '../../../Reactbit/Squares/Squares';
import BlurText from '../../../Reactbit/BlurText/BlurText';

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const LandingPage = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* background */}
      <Squares />

      {/* konten utama */}
      <div className="min-h-screen fixed z-10 inset-0 flex items-center justify-center text-white text-center pointer-events-none">
        <div>
          <BlurText
            text="Vestia Oyyan"
            delay={150}
            animateBy="letters"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="xl:text-9xl text-6xl font-Questrial"/>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
