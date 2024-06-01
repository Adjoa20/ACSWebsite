import Navbar from "@/app/compontents/Navbar";
import React from "react";

const MarketPage = () => {
  return (
    <div className="md:justify-center">
      <Navbar />
      <div className="bg-marketbg relative md:bg-cover h-screen md:h-full flex flex-col items-center justify-center">
      <div className="w-11/12 md:w-1/2 mx-auto">
        <h1 className="mt-20 md:mt-40 uppercase font-extrabold subpixel-antialiased text-center text-3xl md:text-5xl">Marketing</h1>
      </div>
      <div className="px-4 mt-10 md:mt-10 mb-10">
        <div className="grid place-items-center grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl bg-[#fcf2eb] backdrop-blur-sm bg-opacity-30 my-20">
        <p className="md:flex md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16 font-extrabold">
          American Cooperative School’s main market is directed toward families
          or guardians with students already enrolled in a public primary
          schools and planning to move to a private School. The other market is
          families or guardians who plan to transfer their children to a private
          Junior High School from public school.
        </p>
        <p className="md:flex md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16 font-extrabold">
          Target: ACS will target families, who are middle income, feel a need
          for better technology in their child’s education. Other target will be
          students who have a need for stronger focus on individual attention,
          feel that the structure of the public schools is holding back their
          education, and those who seek a better preparation for higher
          education.
        </p>
        <p className="md:flex md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16 font-extrabold">
          Advertisement: ACS will distribute flyers that outline its excellent
          academic programs activities and achievements. The flyers will be
          distributed around all shopping centers including retail stores, gas
          stations and restaurants. Regular announcements will be broadcasted in
          the local radio stations at least twice a week, and also published it
          in the local news paper.
        </p>
        <p className="md:flex md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16 font-extrabold">
          Promotion: ACS will offer 10% tuition fee discount to the first 20
          students who enroll in the school for the first time and 5% discount
          to the next 30 students. Free school materials such as exercise books,
          pencils, and pens will be given to the next 50 students.
        </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MarketPage;
