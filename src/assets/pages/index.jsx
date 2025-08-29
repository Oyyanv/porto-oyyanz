import React from 'react';
import Squares from '../../../Reactbit/Squares/Squares';
import BlurText from '../../../Reactbit/BlurText/BlurText';
import Lanyard from '../components/Lanyard/Lanyard';
import RotatingText from '../../../Reactbit/RotatingText/RotatingText';
import GlassIcons from '../components/GlassIcons/GlassIcons';
import { FiFileText, FiBook, FiHeart, FiCloud, FiEdit, FiBarChart2 } from 'react-icons/fi';

const items = [
  { icon: <FiCloud />, color: 'white', label: 'Weather' },
  { icon: <FiEdit />, color: 'white', label: 'Notes' },
  { icon: <FiBarChart2 />, color: 'white', label: 'Stats' },
];

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
      <section className="relative z-20 bg-[#1A1A1D] text-white min-h-screen flex flex-row overflow-y-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1A1A1D] to-transparent z-10 pointer-events-none" />
        {/* Kolom Kiri */}
        <div className="hidden xl:w-1/2 xl:flex xl:items-center xl:justify-center xl:border-r xl:border-white">
          <Lanyard
            position={[0, 0, 20]}
            gravity={[0, -40, 0]}
            fov={17} />
        </div>

        {/* Kolom Kanan */}
        <div className=" flex flex-col items-start justify-center text-left px-9 xl:ml-12 xl:w-1/2 xl:pr-24 xl:pl-12 xl:py-16"> </div>
      </section>
    </div>
  );
};

export default LandingPage;
