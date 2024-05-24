import Navbar from "@/app/compontents/Navbar";
import React from "react";

const EnrollmentPage = () => {
  return (
    <div className="md:justify-center">
      <Navbar />
      <div className="bg-enrollbg relative md:bg-cover h-screen md:h-screen flex flex-col items-center justify-center" >
        <div className="w-11/12 md:w-1/2 mx-auto">
          <h1 className="mt-20 md:mt-40 uppercase font-extrabold subpixel-antialiased text-center text-3xl md:text-5xl">Enrollment / Admission</h1>
        </div>
        <div className="px-4 mt-10 md:mt-20">
          <div className="grid place-items-center grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl bg-[#fcf2eb] opacity-85 my-20">
            <p className="md:flex md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16 font-extrabold">
              American Cooperative School academic year begins in September and ends
              in July. Emphasis is placed on admitting new students for only crèche
              (pre-nursery) and nursery in the preschool division. New students will
              be considered for admission in the upper class, base on how many old
              students who do not returned in the start of the school season.
            </p>
            <p className="md:flex md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16 font-extrabold">
              American Cooperative School has a three-year expansion plan to
              allocate the Trade school a new 13 acre new school complex. The
              initial plan for first class at the Trade School is to hold or occupy
              40 - 60 students. The three-year plan consists of adding an additional
              class each year. According to our personal interview with parents,
              majority of parents with teenage group who have completed Junior High
              School stated that they would send their children to a private Trade
              School after completion of the Junior High school education. Those
              parents interviewed represents dozens of parents with children in this
              age group and grade level who feel a need for a better education. This
              age group will be the deciding factor on how the American Cooperative
              School’s marketing plan will succeed in the next three years, because
              they will be the future enrolling students for the Trade School
              division.
            </p>
            <p className="md:flex md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16 font-extrabold">
              American Cooperative School has increased enrollment in the Junior
              High school every year, so much so that it needs to expand to a Trade
              School. The Junior High School is the next step for the 60 currently
              enrolled students in Junior High School Grade seven (JHS 1). American
              Cooperative School Junior High School Grade seven students will
              automatically be promoted to its newly expanding Trade School without
              any entrance examination. Outside student wishing to gain an admission
              to the school has to pass a standardized entrance test set by the
              school faculties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentPage;
