import React from "react";

const CTA = () => {
  return (
    <div className="w-full bg-black text-black flex flex-col items-center justify-center p-2 lg:p-20">
      <div
        id="form1"
        className="slide-left focus-within-animate-ping flex flex-col items-center justify-center bg-[#C93EB3] p-5 font-medium m-10 w-full md:w-3/5 lg:w-4/12 h-fit"
      >
        <h1 className="text-5xl font-[Italiana]">Join-Us</h1>
        <input
          type="name"
          placeholder="name"
          id="name"
          className="w-full p-2 bg-gray-200 rounded outline-none my-2"
        />
        <input
          type="email"
          placeholder="e-mail"
          id="email"
          className="w-full p-2 bg-gray-200 rounded outline-none my-2"
        />
        <input
          type="text"
          placeholder="phone number"
          id="phone number"
          className="w-full p-2 bg-gray-200 rounded outline-none my-2"
        />
        <input
          type="date"
          placeholder="date of birth"
          id="date of birth"
          className="w-full p-2 bg-gray-200 rounded outline-none my-2"
        />
        <button
          type="submit"
          className="bg-yellow-400 hover:shadow-md hover:shadow-yellow-300 shadow-none  rounded p-2"
        >
          Submit
        </button>
      </div>
      <div
        id="form1"
        className="slide-right focus-within-animate-ping flex flex-col items-center justify-center bg-[#C93EB3] p-5 font-medium m-10 w-full md:w-3/5 lg:w-4/12  h-fit"
      >
        <h1 className="text-5xl font-[Italiana]">News-Letter</h1>
        <input
          type="name"
          placeholder="name"
          id="name"
          className="w-full p-2 bg-gray-200 rounded outline-none my-2"
        />
        <input
          type="email"
          placeholder="e-mail"
          id="email"
          className="w-full p-2 bg-gray-200 rounded outline-none my-2"
        />
        <input
          type="text"
          placeholder="Your Interests"
          id="Interest"
          className="w-full p-2 bg-gray-200 rounded outline-none my-2"
        />
        <input
          type="date"
          id="date of birth"
          className="w-full p-2 bg-gray-200 rounded outline-none my-2"
        />
        <button
          type="submit"
          className="bg-yellow-400 hover:shadow-md hover:shadow-yellow-300 shadow-none  rounded p-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CTA;
