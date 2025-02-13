import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    "Experienced Educators: Our team comprises qualified and passionate mentors who bring years of teaching expertise.",
    "Interactive Online Classes: We utilize modern technology to create engaging and interactive learning experiences.",
    "Comprehensive Curriculum: Our programs are tailored to meet the needs of students across various grades and exams.",
    "Personalized Attention: Small class sizes and focused mentoring ensure every student gets the support they need.",
    "Holistic Approach: Beyond academics, we instill values, confidence, and a problem solving mindset.",
    "Budget-Friendly: High-quality education that is accessible and economical for every learner"
  ];

  return (
    <section className="self-stretch px-16 py-14 mt-20 w-full text-3xl text-black bg-teal-200 bg-opacity-30 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-4xl mb-8">WHY CHOOSE US?</h2>
      <ul className="list-disc pl-5">
        {reasons.map((reason, index) => (
          <li key={index} className="mb-4">{reason}</li>
        ))}
      </ul>
    </section>
  );
};

export default WhyChooseUs;