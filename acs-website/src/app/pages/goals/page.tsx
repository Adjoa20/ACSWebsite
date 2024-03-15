import Navbar from "@/app/compontents/Navbar";
import React from "react";

const GoalPage = () => {
  return (
    <div className="md:flex md:justify-center md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Navbar />
      <div className="md:w-1/2">
        <h1 className="mt-96 mb-60 uppercase">
          {" "}
          Philosophy & Strategic Goals{" "}
        </h1>
      </div>
      <div>
        <p>
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
        <p>
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
  );
};

export default GoalPage;
