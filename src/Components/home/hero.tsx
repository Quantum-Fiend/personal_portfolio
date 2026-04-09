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
            <p className="tracking-[0.3em] text-2xl sm:text-3xl md:text-4xl text-gray-400 mb-8 sm:mb-11 -mt-4 sm:-mt-4">
              ✦ HELLO...!
            </p>

            {/* Big Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold  md:leading-tight">
              MY NAME IS <br />
              TUSHAR SINGH
            </h1>

            <h2
              className="
   				 mt-3
   				 bg-linear-to-r from-white via-gray-200 to-gray-400
   				 text-transparent bg-clip-text
   				 font-semibold
   				 py-3 px-6
   				 rounded-full
   				 max-w-max
   				 mx-auto sm:mx-0
   				 text-lg sm:text-xl
   				 border border-white/20
  "
            >
              Software Engineer | Full Stack Engineer
            </h2>

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
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 relative">
            {/* Main Image Container with rounded corners on top-left & bottom-right */}
            <div
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-md lg:h-112 xl:w-lg xl:h-128
      overflow-hidden border-4 border-gray-400"
              style={{
                borderRadius: "2rem 0 2rem 0", // top-left & bottom-right rounded
              }}
            >
              <Image
                height={800}
                width={800}
                src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Larger Overlapping Image with heavy rounding top-right & bottom-left */}
            <div
              className="absolute top-0 right-0 w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-60 lg:h-60 xl:w-64 xl:h-64
      overflow-hidden border-4 border-gray-300 shadow-lg"
              style={{
                borderRadius: "0 4rem 0 4rem", // heavy rounding top-right & bottom-left
                transform: "translate(40%, -40%)", // slight overlap outside main image
                backgroundColor: "#f0f0f0", // subtle background behind image for visual separation
              }}
            >
              <Image
                height={400}
                width={400}
                src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                alt="profile small overlay"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
