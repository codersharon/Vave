import { useEffect } from "react";

const Navbar = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center w-full ">
      {/* <img src="/Thumbnail.png" id="thumbnail" alt="Wall" className="w-96 md:w-auto" /> */}
      <div className="border-t pt-12 text-gray-100 font-inter w-full flex justify-around items-center -m-[10%] ">
        <li className=" list-none text-xs md:text-base xl:text-lg mx-1 md:mx-4">
          How-to
        </li>
        <li className="list-none text-xs md:text-base xl:text-lg mx-1 md:mx-4">
          Tech
        </li>
        <li className=" list-none text-xs md:text-base xl:text-lg mx-1 md:mx-4">
          Business
        </li>
        <li className=" list-none text-xs md:text-base xl:text-lg mx-1 md:mx-4">
          Log-in
        </li>
        <li className=" list-none text-xs md:text-base xl:text-lg mx-1 md:mx-4">
          News-Letter
        </li>
        <li className=" list-none text-xs md:text-base xl:text-lg mx-1 md:mx-4">
          Join-us
        </li>
      </div>
    </div>
  );
};

export default Navbar;
