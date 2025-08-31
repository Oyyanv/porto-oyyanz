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
      <div className="absolute inset-0 z-0 ">
        <Squares />

      </div>
      {/* fade efek */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(26,26,29,0)_60%,#151515_95%)]" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#151515] to-transparent" />

      {/* konten utama */}
      <div className="relative min-h-screen flex items-center justify-center text-white text-center pointer-events-none">
        <div className='z-50'>
          <BlurText
            text="Oyyan"
            delay={150}
            animateBy="letters"
            direction="top"
            className="xl:text-9xl text-6xl font-Questrial drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          />
          <BlurText
            text="Junior Web Developer"
            delay={400}
            animateBy="words"
            direction="bottom"
            className="xl:text-7xl text-4xl font-Questrial drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          />
        </div>
      </div>

      {/* about section */}
      <section className="relative z-20 bg-[#151515] text-white min-h-screen flex flex-row overflow-y-hidden">
        {/* <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1A1A1D] to-transparent z-10 pointer-events-none" /> */}
        {/* Kolom Kiri */}
        {/* <div className="hidden xl:w-1/2 xl:flex xl:items-center xl:justify-center xl:border-r xl:border-white">
          <Lanyard
            position={[0, 0, 20]}
            gravity={[0, -40, 0]}
            fov={17} />
        </div> */}

        {/* Kolom Kanan */}
        {/* <div className=" flex flex-col items-start justify-center text-left px-9 xl:ml-12 xl:w-1/2 xl:pr-24 xl:pl-12 xl:py-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl">
            Hello! I'm Muhammad Royyan, an 18-year-old aspiring Web Developer from Kalimantan, Indonesia. I love&nbsp;
            <span className="inline-block">
              <RotatingText
                texts={['Coding', 'Anime', 'Vestia Zeta']}
                mainClassName="sm:px-3 xl:w-40 w-36 md:px-4 bg-white text-black overflow-hidden  justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
            . and i'm passionate about learning new technologies and aim to become one of the best web developers in Indonesia and also the best zecretary 📜.
          </p>
        </div> */}
        {/* bottom barnya */}
        {/* <div className="absolute xl:bottom-10 bottom-24 xl:left-1/2 xl:translate-x-[23%] translate-x-[15%] z-50">
            <GlassIcons items={items} />
          </div> */}
      </section>
    </div>
  );
};

export default LandingPage;
