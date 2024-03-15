import Navbar from "@/app/compontents/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="md:flex md:justify-center md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Navbar />
      <div className="md:w-1/2">
        <h1 className="mt-96 mb-60 uppercase">MISSONS PAGE</h1>
      </div>
      <div>
        <p>
          The mission of American Cooperative School is to provide quality
          education by teaching its students personal values, providing a
          quality academic experience and ingrain the students with a sense of
          responsibility much needed to embrace lifelong learning in a safe and
          positive environment. We nurture creativity, independent thinking,
          respect for others, and pride in our school and community. We value
          the uniqueness of our students and encourage the achievement of their
          personal best. We strive to achieve these goals through educational
          programs which are relevant, challenging and engaging
        </p>
      </div>
    </div>
  );
};

export default page;
