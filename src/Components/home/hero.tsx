"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center">
      {/* Container */}
      <div className="max-w-7xl mx-auto w-full px-6">
        {/* Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* LEFT COLUMN */}
          <div className="md:w-1/2">
            {/* Small heading */}
            <p className="tracking-[0.3em] text-5xl text-gray-400 mb-6">
              ✦ HELLO...!
            </p>

            {/* Big Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              MY <br />
              NAME IS <br />
              TUSHAR <br />
              SINGH
            </h1>

            {/* Description */}
            <p className="mt-8 text-gray-400 max-w-md leading-relaxed text-sm sm:text-base">
              I’m a Full Stack Software Developer and Engineer passionate about
              building scalable, efficient Software | web applications. I focus on clean
              code and creating seamless user experiences using modern
              technologies.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-62.5 h-62.5 sm:w-87.5 sm:h-87.5 lg:w-112.5 lg:h-112.5 rounded-full overflow-hidden">
              <Image
                height={400}
                width={400}
                src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
                alt="profile"
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
