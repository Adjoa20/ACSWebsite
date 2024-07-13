import Navbar from "@/app/compontents/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="md:justify-center">
      <Navbar />
      <div className="bg-staffbg bg-fixed bg-no-repeat relative md:bg-cover min-h-screen md:h-full flex flex-col items-center justify-center">
        <div className="w-11/12 md:w-1/2 mx-auto">
          <h1 className="mt-20 md:mt-40 uppercase font-extrabold subpixel-antialiased text-center text-3xl md:text-5xl">Staffing</h1>
        </div>
        <div className="px-4 mt-10 md:mt-20">
          <div className="grid place-items-center grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl bg-[#fcf2eb] backdrop-blur-sm bg-opacity-30 my-20">
            <p className="md:flex md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16 font-extrabold">
              American Cooperative School has approximately eighty (80) teaching and
              non-teaching staff including volunteers from overseas. The day-to-day
              management team/staff consists of Executive Director, Headmaster,
              Assistant Headmaster, Preschool Department Head, Primary Department
              Head, Junior High School Department Head, Office Manager, Property
              Manager, and Transportation Head. The staffs consist of classroom
              teachers, administrative staff, kitchen staff and janitorial staff.
              Our overseas volunteers perform any additional work outside the job
              descriptions of the staff.
            </p>
            <p className="md:flex md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16">
              The governmental bodies of the school consist of the Executive
              Director and Board of Directors. The Executive Director serves as the
              chairperson of the Board of Directors. The Board of Directors has the
              final say in changes made to policies, curriculum, staffing,
              expansion, and all other decisions outside those made in the
              classroom. Election is held every four years by the parent teacher
              association (PTA) members to elect members to serve as governing body
              for the association
            </p>
            <p className="md:flex md:items-center md:gap-4 md:py-4 md:px-4 xl:gap-4 sm:py-4 xl:px-16 flex flex-col">
              <span className="md:gap-8 xl:gap-16 font-extrabold">International Affiliation:</span> The school is affiliated with ICYE
              (International Cultural Youth Exchange) organization family and as a
              result gets rewarded every year with volunteers from Europe and United
              States of America. These volunteers bring in their respective cultural
              background and experiences which broadens the student’s culture
              horizon.
            </p>
            <p className="md:flex md:items-center md:gap-4 md:py-4 md:px-4 xl:gap-4 sm:py-4 xl:px-16 flex flex-col">
              <span className="md:gap-8 xl:gap-16 font-extrabold">Responsibilities of Headmaster:</span> The responsibilities of the headmaster
              are very important in order to have a successful school. At American
              Cooperative School, the headmaster will report directly to the
              Executive Director. The headmaster will perform any daily tasks,
              including providing guidance for the teaching and non-teaching staff,
              students, enforcing school policies, holding staff meetings, and
              evaluating annual performance of staff. The headmaster must show very
              strong leadership within the school. If there are any problems that
              occur during the school days, the headmaster is responsible to solve
              the problems.
            </p>
            <p className="md:flex md:items-center md:gap-4 md:py-4 md:px-4 xl:gap-4 sm:py-4 xl:px-16 flex flex-col">
              <span className="md:gap-8 xl:gap-16 font-extrabold">Teachers:</span> The average teacher must show strong communication skills
              and be patient with students. Each teacher is responsible for his or
              her classroom and how they plan to run the daily tasks and activities.
              The teacher will prepare weekly lesson plans subject by subject. The
              teacher will be required to develop a strong relationship with the
              students, as well as parents or guardians. Every teacher should set an
              example of how to succeed in the future. The teacher will report
              directly to the Department head teacher.
            </p>
            <p className="md:flex md:items-center md:gap-4 md:py-4 md:px-4 xl:gap-4 sm:py-4 xl:px-16 flex flex-col">
              <span className="md:gap-8 xl:gap-16 font-extrabold">Receptionist/Secretary Responsibilities:</span> The receptionist/secretary
              position requires strong organizational and communication skills. The
              person will understand that there will not be enough work for this
              position and as a result will be required to do any additional work as
              instructed and directed by the head teacher or director. The
              receptionist/secretary must be considerate and patient toward the
              students. The person will work with both the director and head teacher
              to ensure the smooth running of the school.
            </p>
            <p className="md:flex md:items-center md:gap-4 md:py-4 md:px-4 xl:gap-4 sm:py-4 xl:px-16 flex flex-col">
              <span className="md:gap-8 xl:gap-16 font-extrabold">Qualifications:</span>
              <ul className="md:py-2 md:px-2 xl:gap-16 list-disc ml-6 mt-2">
                <li>
                  Headmaster: Must at least possess Bachelor or Diploma in teaching
                  plus 2 – 5 experience in teaching or head of a school.
                </li>
                <li>
                  Teacher: Must possess two year postsecondary teacher certificate
                  or 5 – 10 years teaching experience. The teacher must be well
                  attractive individual with a focus or concentration in at one or
                  more subject areas.
                </li>
                <li>
                  Receptionist/Secretary: Must possess high school diploma or higher
                  with 2 – 5 years experience. The person must have good personality
                  and excellent organizational and communication skills. In
                  addition, the person must be a computer literate; and able to type
                  at least 40 – 50 words per minute.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
