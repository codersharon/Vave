import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="border-b border-gray-500 md:border-none p-2 w-full min-[1920px]:w-3/5 text-white list-none flex flex-col items-center justify-center md:flex-row md:items-center md:justify-around">
      <div className="my-4 md:hidden">
        <img className="w-full m-2" src="/tech-vave-dark-1-1@2x.png" alt="" />
      </div>
      <Link
        href={"/#Tech"}
        className="my-2 text-2xl md:text-md md:mx-1 hover:underline cursor-default"
      >
        Tech
      </Link>
      <Link
        className="my-2 text-2xl md:text-md md:mx-1 hover:underline cursor-default"
        href={"/#Business"}
      >
        Business
      </Link>
      <Link
        className="my-2 text-2xl md:text-md md:mx-1 hover:underline cursor-default"
        href={"/#Science"}
      >
        Science
      </Link>
      <div className="mx-1 hidden md:block">
        <img
          id="Home"
          className="w-28"
          src="/tech-vave-dark-1-1@2x.png"
          alt=""
        />
      </div>
      <Link
        className="my-2 text-2xl md:text-md md:mx-1 hover:underline cursor-default"
        href={"/#join-us"}
      >
        Join-us
      </Link>
      <Link
        className="my-2 text-2xl md:text-md md:mx-1 hover:underline cursor-default"
        href={"/#news-letter"}
      >
        News-Letter
      </Link>
      <Link
        href={"/log-in"}
        className="my-2 text-2xl md:text-md md:mx-1 hover:underline cursor-default"
      >
        Log-in
      </Link>
    </div>
  );
};

export default Navigation;
