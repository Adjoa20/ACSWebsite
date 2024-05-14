import Navbar from "@/app/compontents/Navbar";
import React from "react";

const EnrollmentPage = () => {
  return (
    <div className="md:flex md:justify-center md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16 bg-enrollbg bg-no-repeat h-screen bg-fixed">
      <Navbar />
      <div className="md:w-1/2">
        <h1 className="mt-96 mb-60 uppercase">Enrollment / Admission</h1>
      </div>
      <div>
        <p>
          American Cooperative School academic year begins in September and ends
          in July. Emphasis is placed on admitting new students for only crèche
          (pre-nursery) and nursery in the preschool division. New students will
          be considered for admission in the upper class, base on how many old
          students who do not returned in the start of the school season.
        </p>
        <p>
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
        <p>
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
  );
};

export default EnrollmentPage;
