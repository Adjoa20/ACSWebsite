"use client"
import React from "react";
import { TypeAnimation } from 'react-type-animation';
// import Slider from "./Slider";



const HeroSection = () => {
  return (
    <section className="lg:py-16 scroll-smooth relative">
      <div className="grid grid-rows-1 lg:grid-rows-12">
        <div className="z-10 mt-28 items-center fixed">
          <h1 className="text-xl md:text-5xl font-black text-black subpixel-antialiased text-center uppercase mt-28">
          <TypeAnimation 
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'American Cooperative School',
              1000, // wait 1s before replacing
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
          </h1>
          <p className="mt-52 text-black subpixel-antialiased text-center">
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
        <div className="mt-28 fixed top-0 w-11/12">
          {/* <Slider /> */}
        </div>
      </div>
    </section>

  );
};

export default HeroSection;
