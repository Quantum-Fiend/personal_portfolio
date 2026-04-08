"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center px-6 sm:px-12 md:px-24 lg:px-32">
      {/* Container */}
      <div className="w-full max-w-300 mx-auto">
        {/* Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* LEFT COLUMN */}
          <div className="md:w-1/2 text-center md:text-left">
            {/* Small heading */}
            <p className="tracking-[0.3em] text-2xl sm:text-3xl md:text-4xl text-gray-400 mb-4 sm:mb-6">
              ✦ HELLO...!
            </p>

            {/* Big Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  md:leading-tight">
              MY NAME IS <br />
              TUSHAR SINGH
            </h1>

            {/* Description */}
            <p className="mt-6 sm:mt-8 text-gray-400 max-w-md sm:text-lg md:text-xl leading-relaxed mx-auto md:mx-0">
              I’m a Full Stack Software Developer and Engineer passionate about
              building scalable, efficient Software | web applications. I focus
              on clean code and creating seamless user experiences using modern
              technologies.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Primary Button: Hire Me */}
                <button
                  className="bg-linear-to-r from-gray-200 via-gray-300 to-gray-400 text-black font-bold py-3 px-6 rounded-full 
             hover:bg-linear-to-r hover:from-gray-300 hover:via-gray-400 hover:to-gray-500 
             hover:text-white transition-all duration-300 text-lg sm:text-xl w-full sm:w-auto"
                >
                  Hire Me
                </button>

                {/* Secondary Button: Download CV */}
                <button
                  className="bg-linear-to-r from-gray-200 via-gray-300 to-gray-400 text-black font-bold py-3 px-6 rounded-full 
             hover:bg-linear-to-r hover:from-gray-300 hover:via-gray-400 hover:to-gray-500 
             hover:text-white transition-all duration-300 text-lg sm:text-xl w-full sm:w-auto"
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-md lg:h-112 xl:w-lg xl:h-128">
              <Image
                height={800}
                width={800}
                src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                alt="profile"
                className="w-full h-full object-cover rounded-full border-4 border-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
