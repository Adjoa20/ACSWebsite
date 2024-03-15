import Navbar from "@/app/compontents/Navbar";
import React from "react";

const CurriculumPage = () => {
  return (
    <div className="md:flex md:justify-center md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Navbar />
      <div className="md:w-1/2">
        <h1 className="mt-96 mb-60 uppercase">Curriculum</h1>
      </div>
      <div className="mt-52">
        <p>
          The curriculum of American Cooperative School is based not only on the
          acquisition of knowledge but also on the development of
          problem-solving and critical-thinking skills. Using a broad
          research-based and culturally diverse curriculum, we emphasize on
          strong literacy, written and oral communication, and the creative
          process of the arts including drama and music; reading and writing
          workshops. Students are also trained in the acquisition and mastery of
          multiple language (foreign, and local), reasoning in the areas of
          Sciences and Mathematics while leveraging Basic Computer skills in the
          pursuit of a physically active and healthy lifestyle. Students learn
          by active participation in developmentally appropriate activities.
          Classroom instructions include hands-on learning, innovative
          techniques and cooperative learning, all of which are enriched with
          educationally and culturally sound field trips and excursions.
        </p>
        <p>
          The curriculum is also based on Ghanaian, American and other
          international programs of education and incorporates the best
          educational practices from around the world. There is a strong
          emphasis on a commitment to global and intercultural education. The
          school strives for academic excellence, a well-balanced development of
          all aspects of the student’s personality and an appreciation for
          lifelong learning. The Trade School grade levels will be required to
          master general subjects with various topics, introducing students to
          the rigorous learning topics of the higher levels. The student ratio
          will remain well below the average of the surrounding schools. The
          number of students will remain at an average of 30 - 40 per class,
          until the expansion of enrollment of the student body and facilities
          that will allow for more faculties and classes per grade.
        </p>
        <p>
          The curriculum for American Cooperative School will vary as each
          student promoted to a higher grade level. The courses will be
          available to only the grade that the student is in. Each grade will be
          limited to the amount of courses they will be allowed to take. Below
          shows a list of courses that are offered in various divisions
          including Junior High School:
          <p>Primary School:</p>
          <ul>
            <li>Language Art (English; French; Local)</li>
            <li>Mathematics</li>
            <li>Science (Natural; and Integrated)</li>
            <li>ICT (Information Communication & Technology)</li>
            <li>RME (Religious and Moral Education)</li>
            <li>
              Creative Art (Dancing & Drama, Music & Chorus, cultural activity,
              needle and weaving, Pattern making, Drawing, Decorations)
            </li>
            <li>Physical Education; Reading & Writing Workshop</li>
          </ul>
          <p>Junior High School:</p>
          <ul>
            <li>Language Art (English; French; Local)</li>
            <li>Mathematics</li>
            <li>General Science</li>
            <li>Social Studies</li>
            <li>Vocational & Technical Skills</li>
            <li>
              ICT (Information Communication & Technology); & Computer Problem
              solving
            </li>
            <li>Physical Education; Reading & Writing workshop </li>
          </ul>
        </p>
        <p>
          Extra curriculum: American Cooperative School offers a wide array of
          after school programs ranging from Talent shows, Drama, Dancing,
          Spelling “B” competition and Quizzes. Among the many amenities that
          the school rewards to student who have shown exception progress are
          vacation or summer classes. This additional class prepares students
          for their next promotional classes. American Cooperative School
          participates in all schools sports activities recommended by Ghana
          Education Service.
        </p>
      </div>
    </div>
  );
};

export default CurriculumPage;
