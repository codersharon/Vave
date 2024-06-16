import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-start w-full p-4 bg-black text-white">
      <Link href={"/"}>
        <img
          src="/tech-vave-dark-1-1@2x.png"
          alt="logo"
          className="w-28 hidden md:block xl:w-36"
        />
      </Link>
      <div className="grid grid-cols-3 gap-6 mx-5">
        <Link
          href={"/#Tech"}
          className="my-2 md:text-md md:mx-1 hover:underline cursor-default"
        >
          Tech
        </Link>
        <Link
          className="my-2 md:text-md md:mx-1 hover:underline cursor-default"
          href={"/#Business"}
        >
          Business
        </Link>
        <Link
          className="my-2 md:text-md md:mx-1 hover:underline cursor-default"
          href={"/#Science"}
        >
          Science
        </Link>
        <Link
          className="my-2 md:text-md md:mx-1 hover:underline cursor-default"
          href={"/#join-us"}
        >
          Join-us
        </Link>
        <Link
          className="my-2 md:text-md md:mx-1 hover:underline cursor-default"
          href={"/#news-letter"}
        >
          News-Letter
        </Link>
        <Link
          href={"/log-in"}
          className="my-2 md:text-md md:mx-1 hover:underline cursor-default"
        >
          Log-in
        </Link>
      </div>
    </div>
  );
};

export default Footer;
