import React from "react";
import Slider from "./Slider";



const HeroSection = () => {
  return (
    <section className="lg:py-16 scroll-smooth relative">
      <div className="grid grid-rows-1 lg:grid-rows-12">
        <div className="z-10 mt-28 items-center fixed">
          <h1 className="text-xl md:text-5xl font-black text-black subpixel-antialiased uppercase text-center mt-28">American Cooperative School</h1>
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
          <Slider />
        </div>
      </div>
    </section>

  );
};

export default HeroSection;
