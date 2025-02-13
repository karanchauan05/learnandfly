import React from 'react';

const Courses = () => {
  const courses = [
    "Online Coaching for Grades 1–10: Covering all subjects with a focus on clarity and application.",
    "Reasoning and Aptitude Training: Enhancing logical reasoning, critical thinking, and decision-making skills.",
    "General Studies for Competitive Exams: Comprehensive preparation for various competitive examinations."
  ];

  return (
    <section className="mt-11 text-3xl text-black max-md:mt-10 max-md:max-w-full">
      <h2 className="text-4xl mb-8">WHAT COURSES WE OFFER?</h2>
      <ul className="list-disc pl-5">
        {courses.map((course, index) => (
          <li key={index} className="mb-4">{course}</li>
        ))}
      </ul>
    </section>
  );
};

export default Courses;