import React from 'react';

const SocialLink = ({ icon, name }) => (
  <div className="flex gap-3 mt-4 max-w-full whitespace-nowrap w-[156px]">
    <img
      loading="lazy"
      src={icon}
      alt={`${name} icon`}
      className="object-contain shrink-0 w-7 aspect-[1.08]"
    />
    <div className="grow shrink">{name}</div>
  </div>
);

const Footer = () => {
  const socialLinks = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/1ba08e15231f47ac95175203e3ca154e/dd33e504fd0e386e8551f3bce291250c465df133cd801ca729cffa8a848f8a69?apiKey=1ba08e15231f47ac95175203e3ca154e&", name: "Linkedin" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/1ba08e15231f47ac95175203e3ca154e/d2b4964a8bd7c0215bac15f91d11796c10f2b8280d9de85d2e5de33a2f56d506?apiKey=1ba08e15231f47ac95175203e3ca154e&", name: "Instagram" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/1ba08e15231f47ac95175203e3ca154e/2c12aea82df8f85cc2789a23e7e4f641e3640563580e6e98e313ef470328b9cb?apiKey=1ba08e15231f47ac95175203e3ca154e&", name: "Facebook" }
  ];

  return (
    <footer className="flex flex-col justify-center items-center self-stretch px-16 py-36 w-full text-white bg-teal-800 max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-5 justify-between mb-0 w-full max-w-[1697px] max-md:mb-2.5 max-md:max-w-full">
        <div className="flex flex-col max-md:max-w-full">
          <h2 className="self-start text-6xl max-md:max-w-full max-md:text-4xl">
            <span className="text-7xl font-bold">LEARN & FLY</span>
            <br />
            <span className="text-5xl">Where Learning Takes Flight</span>
          </h2>
          <p className="mt-16 text-4xl max-md:mt-10 max-md:max-w-full">
            Coaching and mindfulness for humans who want to build a better world.
          </p>
        </div>
        <div className="flex flex-col items-center self-start mt-4 text-2xl">
          <h3 className="self-stretch">CONNECT WITH US</h3>
          {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;