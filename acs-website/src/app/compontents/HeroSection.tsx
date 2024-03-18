import React from "react";
import Slider from "./Slider";


const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <Slider />
      <div className="grid grid-rows-1 lg:grid-rows-12 mt-24">
        <h1 className="mt-96 font-extrabold">American Cooperative School</h1>
        <p className="">
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
    </section>
  );
};

export default HeroSection;
