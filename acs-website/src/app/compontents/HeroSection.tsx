'use client'
import React from 'react';
import { TypeAnimation } from 'react-type-animation';




const HeroSection = () => {
  return (
    <section className="lg:py-16 scroll-smooth relative bg-acsbg h-screen flex flex-col justify-center items-center">
      <div className="text-center z-10 mt-28 lg:mt-0">
        <h1 className="text-xl md:text-5xl font-black text-black subpixel-antialiased uppercase">
          <span>We Are</span> <br />
          <TypeAnimation 
            sequence={[
              'American Cooperative School',
              5000,
              'A Community',
              5000, 
              'Leaders',
              5000, 
              'Outstanding',
              5000, 
              'Spirited',
              5000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </h1>
        <div className="grid place-items-center grid-cols-1 w-full max-w-5xl shadow-2xl rounded-2xl bg-[#fff1e7] backdrop-blur-sm bg-opacity-30 my-20 p-8 mx-auto">
          <p className="md:flex md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16 font-extrabold">
            The need for educating the youth is on the rise. This has encouraged
            many private individuals to establish more private schools since the
            government of Ghana is unable to accommodate all the children in the
            public schools. Many of these private schools provide a better
            learning environment and quality education than the public schools at
            the primary and Junior High Schools level. American Cooperative School
            exemplifies one of the modern schools that aim at providing quality
            basic education for those students who are in its Preschool, Primary
            and Junior High School grades level.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
