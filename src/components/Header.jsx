import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between items-start w-full max-w-[1804px] max-md:max-w-full">
      <nav className="text-3xl text-black max-md:max-w-full">
        <ul className="flex space-x-4">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/courses">COURSES</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/blog">BLOG</Link></li>
        </ul>
      </nav>
      <div className="flex gap-10 text-2xl text-white">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/1ba08e15231f47ac95175203e3ca154e/7ffeee88224d315baf9dde58d510ef944f6014b34b4ddc10ca94ecf9f9f095b6?apiKey=1ba08e15231f47ac95175203e3ca154e&"
          alt=""
          className="object-contain shrink-0 my-auto aspect-[0.96] w-[27px]"
        />
        <div className="flex flex-auto gap-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/1ba08e15231f47ac95175203e3ca154e/29296c58ec956f078e47ad7ff37bad4a4d4fe56a882ff986bcdcaf0553f9521a?apiKey=1ba08e15231f47ac95175203e3ca154e&"
            alt=""
            className="object-contain shrink-0 my-auto aspect-[1.04] w-[27px]"
          />
          <Link to="/contact" className="px-4 pt-3.5 pb-8 bg-red-400 max-md:pr-5">
            CONTACT US
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;