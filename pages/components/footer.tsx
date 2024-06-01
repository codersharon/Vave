import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-start w-full p-4 bg-black text-white">
      <a href="#Home">
        <img
          src="/tech-vave-dark-1-1@2x.png"
          alt="logo"
          className="w-28 hidden md:block xl:w-36"
        />
      </a>
      <div className="grid grid-cols-3 gap-6 mx-5">
        <li className="font-Inter list-none">
          <a href="#Tech">Tech</a>
        </li>
        <li className="font-Inter list-none">
          <a href="#Business">Business</a>
        </li>
        <li className="font-Inter list-none">
          <a href="#Science">Science</a>
        </li>
        <li className="font-Inter list-none">
          <a href="#join-us">Join-Us</a>
        </li>
        <li className="font-Inter list-none">
          <a href="#News-Letter">News-Letter</a>
        </li>
        <li className="font-Inter list-none">Archives</li>
      </div>
    </div>
  );
};

export default Footer;
