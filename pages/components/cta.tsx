import React, { useState } from "react";

const CTA = () => {
  const [submited, setSubmited] = useState(false);
  const [joinForm, setJoinForm] = useState({
    name: "",
    email: "",
    phonenumber: "",
    DOB: "",
  });
  const handleChange = (e) => {
    setJoinForm({ ...joinForm, [e.target.name]: e.target.value });
  };

  function uploadForm(name, email, phonenumber, DOB) {
    let bodyContent = JSON.stringify({
      name: name,
      email: email,
      phonenumber: phonenumber,
      DOB: DOB,
    });
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };
    const r = fetch("/api/", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });
  }

  const handleSubmit = () => {
    uploadForm(
      joinForm.name,
      joinForm.email,
      joinForm.phonenumber,
      joinForm.DOB
    );
    setSubmited(true);
  };
  return (
    <div className="w-full bg-black text-black flex flex-col items-center justify-center p-2 lg:p-20">
      {submited ? (
        <h1 className="bg-[#C93EB3] p-2 font-bold">
          Thank You For Applying Form! We will send an email with in a week
        </h1>
      ) : (
        <div
          id="join-us"
          className="slide-left focus-within-animate-ping flex flex-col items-center justify-center bg-[#C93EB3] p-5 font-medium m-10 w-full md:w-3/5 lg:w-4/12 h-fit"
        >
          <h1 className="text-5xl font-[Italiana]">Join-Us</h1>
          <input
            type="name"
            placeholder="name"
            id="name"
            onChange={handleChange}
            className="w-full p-2 bg-gray-200 rounded outline-none my-2"
          />
          <input
            type="email"
            placeholder="e-mail"
            id="email"
            onChange={handleChange}
            className="w-full p-2 bg-gray-200 rounded outline-none my-2"
          />
          <input
            type="text"
            placeholder="phonenumber"
            id="phonenumber"
            className="w-full p-2 bg-gray-200 rounded outline-none my-2"
          />
          <input
            type="date"
            placeholder="date of birth"
            id="DOB"
            onChange={handleChange}
            className="w-full p-2 bg-gray-200 rounded outline-none my-2"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:shadow-md hover:shadow-yellow-300 shadow-none  rounded p-2"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}
      <div
        id="news-letter"
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
