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
          <div className='mt-32 absolute left-[48%] -translate-x-1/2 flex justify-center'>
            <button
              className="group pointer-events-auto relative inline-flex h-12 w-12 items-center
              justify-center overflow-hidden rounded-full bg-[#ffffff] font-medium text-black
              transition-all duration-300 xl:hover:w-36">
              <div className="hidden xl:inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
                Scroll Down
              </div>
              {/* buat hape */}
              <div className="absolute right-3.5 xl:hidden">
                <svg xmlns="http://www.w3.org/2000/svg"
                width='20' height='20' viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>

              </div>
              {/* buat desktop */}
              <div className="absolute right-3.5 hidden xl:block">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>
          </div>
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
