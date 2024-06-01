import Navbar from "@/app/compontents/Navbar";
import React from "react";

const GoalPage = () => {
  return (
    <div className="md:justify-center">
      <Navbar />
      <div className="bg-philosophybg relative md:bg-cover h-screen md:h-screen flex flex-col items-center justify-center">
        <div className="w-11/12 md:w-1/2 mx-auto">
          <h1 className="mt-20 md:mt-40 uppercase font-extrabold subpixel-antialiased text-center text-3xl md:text-5xl">
            {" "}
            Philosophy & Strategic Goals{" "}
          </h1>
        </div>
        <div className="px-4 mt-10 md:mt-20">
          <div className="grid place-items-center grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl bg-[#fcf2eb] backdrop-blur-sm bg-opacity-30 my-20">
            <p className="md:flex md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16 font-extrabold">
              The goals of American Cooperative School are to focus on the needs of
              the students, employees, parents, and community. The school is
              committed to teaching and inspiring each student to become an
              independent thinker and contributing citizen with a life-long desire
              to learn. Each student will be given a collectively supportive
              opportunity to reach his or her greatest potential with a small or
              medium class sizes, a safe and nurturing environment, active parental
              involvement, and a strong curriculum that is enriched with service
              learning.
            </p>
            <p className="md:flex md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16 font-extrabold">
              We foster freedom of expression, independent thinking, and positive
              personal values and qualities while maintaining a sense of
              responsibility to others through respect and cooperation. The
              educational framework of American Cooperative School supports a
              balance between the processes and outcomes of learning. We believe
              that for students to be effective, fully contributing members of the
              society, they must possess social and moral responsibility, and
              demonstrate this through the understanding and respect for others and
              service to the community. American Cooperative School strives to
              enhance each student’s self-worth, confidence, and pride by providing
              programs that make the most of our multi-cultural school community.
              This school’s environment is created through a partnership involving
              students, faculty, administration, parents, and the community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalPage;
