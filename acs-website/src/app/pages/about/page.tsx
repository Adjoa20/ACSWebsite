import Navbar from "@/app/compontents/Navbar";
import React from "react";

const AboutPage = () => {
  return (
    <div className="md:justify-center">
      <Navbar />
      <div className="md:w-1/2">
        <h1 className="mt-96 mb-60 uppercase">History / Background </h1>
      </div>
      <div>
        <p className="md:flex md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16">
          American Cooperative School was founded in September 2005 by Alex
          Kwasi Amoako with a student population of about one hundred. The
          school held its first classes on September 2005, using a residential
          home as its center of operation. Classes ranging from Pre-Nursery to
          First Grade were held across the car garage, two bedrooms, and a
          living room of the residential home. Nineteen years after its
          conception, American Cooperative School, has evolved to approximately
          1,300 students in its old and new storey buildings consisting of
          individual classrooms. Classes have also been expanded from Grade 1 up
          to Junior High School (Grade 9) level. Due to its rapid growth and
          popularity, the school is now extending its facilities to a new
          acquired 13 acre land. The school has a time table to complete the new
          school complex within the next three years. The new complex will
          accommodate a trade school focusing on electrical training for
          technicians and provide apprenticeships for its students. The new
          complex will consist of classrooms, auditorium, science lab, computer
          lab, electrical workshop, library, dormitories for both boys and
          girls, kitchen, cafeteria, sports complex (soccer field, tennis court,
          basketball court, volley ball pitch, and gymnasium facility), and a
          microgrid to help provide clean power to all these facilities.
        </p>
        <p className="md:flex md:items-center md:gap-8 md:py-8 md:px-4 xl:gap-16 sm:py-16 xl:px-16">
        Achievements: American Cooperative School is recognized as a category
          “A” school in the Sekyere East District. For the past ten years,
          American Cooperative School has continuously obtained a 100% score in
          the national Basic Education Certificate Examination (BECE). American
          Cooperative School has also been awarded several trophies including
          Spelling “B” competition at the district level, the Cultural Drama
          Competition at the regional level, Soccer Competition at the district
          level. We take great pride in acknowledging these achievements,
          considering the period of our existence.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
