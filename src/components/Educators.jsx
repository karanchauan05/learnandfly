import React from 'react';

const EducatorCard = ({ name, description }) => (
  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow pt-9 pr-16 pb-32 pl-7 w-full text-black bg-white rounded-xl border border-black border-solid max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <h3 className="self-center text-5xl text-center max-md:text-4xl mb-14">{name}</h3>
      <p className="text-4xl max-md:max-w-full">{description}</p>
    </div>
  </div>
);

const Educators = () => {
  const educators = [
    {
      name: "Nishant Narvekar",
      description: "A motivated educator with 4+ years of teaching expertise, he focuses on teaching by imparting knowledge through a practical, methodical approach and mentoring students to excel academically as well as citizens."
    },
    {
      name: "Dharmangi Parmar",
      description: "A passionate chemistry enthusiast with over 3 years of teaching experience. Her teaching philosophy revolves around creating a learner-centric environment encouraging to think critically, ask questions, and explore solutions empathetically."
    }
  ];

  return (
    <section className="flex flex-col items-center self-stretch px-16 pt-16 pb-64 mt-16 w-full bg-rose-50 max-md:px-5 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-7xl text-center text-black max-md:max-w-full max-md:text-4xl mb-20">MEET OUR EDUCATORS</h2>
      <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {educators.map((educator, index) => (
            <EducatorCard key={index} {...educator} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Educators;