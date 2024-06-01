import Navbar from "@/app/compontents/Navbar";
import React from "react";

const PolicyPage = () => {
  return (
    <div className="md:justify-center">
      <Navbar />
      <div className="bg-policybg relative md:bg-cover h-screen md:h-full flex-col items-center justify-center">
        <div className="w-11/12 md:w-1/2 mx-auto">
          <h1 className="mt-10 md:mt-40 mb:20 uppercase font-extrabold subpixel-antialiased text-center text-3xl md:text-5xl">Policies</h1>
        </div>
        <div className="px-4 mt-10 md:mt-20 mb-40">
          <div className="grid place-items-center w-full mx-auto  shadow-2xl rounded-2xl bg-[#5d4b3e] backdrop-blur-sm bg-opacity-30 my-20">
            <p className="md:flex md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16 font-extrabold">
              The policies of American Cooperative School are established
              to hold students to a higher standard than that of traditional
              students. The rules and regulations of the school are set-up to teach
              students respect to their fellow students, parents, guardians, and the
              community. The policies of the school are also established to mold
              responsible and well-rounded members of the community. Along with
              providing students the tools necessary to be successful in gaining a
              higher education and future beyond school, the educational
              requirements in the policies are established to form attractive
              members who will be useful to the community.
            </p>
            <div className="grid grid-cols-7 gap-x-8 gap-y-4">
              <p className="md:flex md:items-center flex flex-col">
                <span className="md:gap-8 xl:gap-16 font-extrabold">Attendance:</span>
                American Cooperative School recognizes that daily
                attendance and active class participation are essential to maintain
                higher standard of its students. The school does, however, recognize
                that there are uncontrollable events that prevent a student from
                attending classes. In the event a student cannot attend or late for
                class, the school will accept a written note from a student’s parents
                or guardians. Any student who fails to submit a written excuse will
                result in a failing or incomplete grade for the activities missed.
                Each student is allowed five absences and three tardiness per each
                school term. When a student exceeds the allowed number of days, the
                student will fail all activities done during an absence or tardy
                regardless of whether or not an excuse is provided. When a tardy
                results in the student missing more than half of the day, it will be
                considered as an absence. American Cooperative School recognizes the
                following as justifiable reasons for absence and tardiness: Family
                Emergencies (eg. death); Sickness; Doctors Visit (routine health
                check-up); Religious Holidays Observances.
              </p>
              <p className="md:flex md:items-center flex flex-col">
                <span className="md:gap-8 xl:gap-16 font-extrabold">Dress Code:</span>
                Students are required to wear the prescribed and
                appropriate dress or uniform. The males’ uniforms consist of wine
                collared white short sleeve shirt with wine stripes at the edge of the
                sleeve, and blue short pants for the preschool and primary school
                students. The Junior High School uniforms consist of wine collared
                white short sleeves with a blue tie, and blue khaki long
                pants/trousers. For females, the uniform consists of a wine collared
                white shirt sleeve with wine stripe at the edge of the sleeve, and
                blue skirt for the preschool and primary schools. The Junior High
                School uniform consists of wine collared white short sleeves shirt
                with blue bow tie, and blue skirt. Female’s skirt must reach to the
                knees all times.
              </p>
              <p className="md:flex md:items-center flex flex-col">
                <span className="md:gap-8 xl:gap-16 font-extrabold">Leave School’s Campus:</span>
                Students are required to receive a permit from
                the school’s administration office before leaving the school’s campus
                during the school days. Leaving the school campus without permission
                will result in an individually decided reasonable or lawful punishment
                by school authorities.
              </p>
              <p className="md:flex md:items-center flex flex-col">
                <span className="md:gap-8 xl:gap-16 font-extrabold">Use of Tobacco/Alcohol:</span>
                Any student caught in possession or using
                tobacco/alcohol within the school premises or campus or at any school
                activity will receive a lawful decided punishment by school
                authorities.
              </p>
              <p className="md:flex md:items-center flex flex-col">
                <span className="md:gap-8 xl:gap-16 font-extrabold">Weapons:</span>
                No student is allowed to bring or carry weapon in the school.
                Any student caught in possession of weapons, such as guns, knives,
                razor or any sharp cutting material will be dismissed from the school.
                The school authorities may refer such act to a law enforcement agency
                for any legal consequences. Students who are dismissed for having a
                weapon on the school campus will not be allowed to enroll or register
                at the school.
              </p>
              <p className="md:flex md:items-center flex flex-col">
                <span className="md:gap-8 xl:gap-16 font-extrabold">Fighting:</span>
                Any student caught in the act of fighting will be suspended
                from the school immediately. The extent of this suspension will be
                decided on an individual basis. If the fighting results to physical
                injuries or damages, the student(s) will be referred to a law
                enforcement agency for any legal consequences.
              </p>
              <p className="md:flex md:items-center flex flex-col mb-30">
                <span className="md:gap-8 xl:gap-16 font-extrabold">Other Offenses: </span>
                American Cooperative School’s teachers are expected to
                use their own good judgment in any other offense cases. However, to
                maintain fairness to all students, any offense not mentioned in the
                school policies or code of conduct will be immediately directed or
                referred to the Board of Directors. Teachers are not allowed to act
                outside of the school policies. The Board of Directors, however, has
                the final say in any punishment for other offenses or infringement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
