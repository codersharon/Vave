import React from "react";

const Navigation = () => {
  return (
    <div className="border-b border-gray-500 md:border-none p-2 w-full min-[1920px]:w-3/5 sticky top-0 text-white list-none flex flex-col items-center justify-center md:flex-row md:items-center md:justify-around">
      <div className="my-4 md:hidden">
        <img className="w-full m-2" src="/tech-vave-dark-1-1@2x.png" alt="" />
      </div>
      <li className="my-2 text-2xl md:text-md md:mx-1">Tech</li>
      <li className="my-2 text-2xl md:text-md md:mx-1">Business</li>
      <li className="my-2 text-2xl md:text-md md:mx-1">Science</li>
      <div className="mx-1 hidden md:block">
        <img className="w-28" src="/tech-vave-dark-1-1@2x.png" alt="" />
      </div>
      <li className="my-2 text-2xl md:text-md md:mx-1">Join-us</li>
      <li className="my-2 text-2xl md:text-md md:mx-1">News-Letter</li>
      <li className="my-2 text-2xl md:text-md md:mx-1">Log-in</li>
    </div>
  );
};

export default Navigation;
