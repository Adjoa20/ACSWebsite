import Navbar from "@/app/compontents/Navbar";
import React from "react";

const MissonPage = () => {
  return (
    <div className="md:justify-center">
      <Navbar />
      <div className="bg-missionbg relative md:bg-cover h-screen md:h-screen flex flex-col items-center justify-center">
        <div className="w-11/12 md:w-1/2 mx-auto">
          <h1 className="mt-20 md:mt-40 uppercase font-extrabold subpixel-antialiased text-center text-3xl md:text-5xl">Missions</h1>
        </div>
        <div className="px-4 mt-10 md:mt-10 mb-20">
          <div className="grid place-items-center grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl bg-[#5d4b3e] backdrop-blur-sm bg-opacity-30 p-8">
            <p className="md:flex md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16 font-extrabold">
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
      </div>
    </div>
  );
};

export default MissonPage;
