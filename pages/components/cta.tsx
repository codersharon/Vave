import React, { useState } from "react";

const CTA = () => {
  const [error, setError] = useState({error: false, mesg: ""});

  const [submited, setSubmited] = useState(false);
  const [joinForm, setJoinForm] = useState({
    name: "",
    email: "",
    DOB: "",
  });

  async function uploadForm(name, email, DOB) {
    let bodyContent = await JSON.stringify({
      name: name,
      email: email,
      DOB: DOB,
    });
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };
    const r = await fetch("/api/join/", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    const result = await r.json();
    return result
  }

  const handleChange = (e) => {
    setJoinForm({ ...joinForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const JoinResult = await uploadForm(joinForm.name, joinForm.email, joinForm.DOB);
    if (JoinResult.success == true) {
      setSubmited(true);
    } else if (JoinResult.success == false) {
      setError({error: true, mesg: JoinResult.error});
      setSubmited(true);
    }
  };

  const [Following, setFollowing] = useState(false);
  const [Follower, setFollower] = useState({
    name: "",
    email: "",
    DOB: "",
  });

  async function Follow(name, email, DOB) {
    let bodyContent = JSON.stringify({
      name: name,
      email: email,
      DOB: DOB,
    });
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };
    const r = await fetch("/api/follow/", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    const result = await r.json();
    return result
  }

  const handFollowerDetailes = (e) => {
    setFollower({ ...Follower, [e.target.name]: e.target.value });
  };

  const handleFollowing = async () => {
    const FollowRequested = await Follow(Follower.name, Follower.email, Follower.DOB);
    console.log(Follower)
    if (FollowRequested.success == true) {
      setFollowing(true);
    } else if (FollowRequested.success == false) {
      setError({error: true, mesg: FollowRequested.error});
      setFollowing(true);
    };
  };
  return (
    <div className="w-full bg-black text-black flex flex-col items-center justify-center p-2 lg:p-20">
      {submited ? (
        <h1 className="bg-[#C93EB3] p-2 font-bold">
          {error.error? error.mesg : "Thank You For Applying Form! We will send an email with-in a week"}
        </h1>
      ) : (
        <div
          id="join-us"
          className="slide-left focus-within-animate-ping flex flex-col items-center justify-center bg-[#C93EB3] p-5 font-medium m-10 w-full md:w-3/5 lg:w-4/12 h-fit"
        >
          <h1 className="text-5xl font-[Italiana]">Join-Us</h1>
          <input
            name="name"
            type="name"
            placeholder="name"
            id="name"
            onChange={handleChange}
            className="w-full p-2 bg-gray-200 rounded outline-none my-2"
          />
          <input
            name="email"
            type="email"
            placeholder="e-mail"
            id="email"
            onChange={handleChange}
            className="w-full p-2 bg-gray-200 rounded outline-none my-2"
          />
          <input
            name="DOB"
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
      {Following ? (
        <h1 className="bg-[#C93EB3] p-2 font-bold">
          {error.error? error.mesg : "Thank You For Following Our Email News-Letter! We will send an email with-in a week"}
        </h1>
      ) : (
        <div
          id="news-letter"
          className="slide-right focus-within-animate-ping flex flex-col items-center justify-center bg-[#C93EB3] p-5 font-medium m-10 w-full md:w-3/5 lg:w-4/12  h-fit"
        >
          <h1 className="text-5xl font-[Italiana]">News-Letter</h1>
          <input
            name="name"
            onChange={handFollowerDetailes}
            type="name"
            placeholder="name"
            id="name"
            className="w-full p-2 bg-gray-200 rounded outline-none my-2"
          />
          <input
            name="email"
            onChange={handFollowerDetailes}
            type="email"
            placeholder="e-mail"
            id="email"
            className="w-full p-2 bg-gray-200 rounded outline-none my-2"
          />
          <input
            name="DOB"
            onChange={handFollowerDetailes}
            type="date"
            id="DOB"
            className="w-full p-2 bg-gray-200 rounded outline-none my-2"
          />
          <button
            type="submit"
            onClick={handleFollowing}
            className="bg-yellow-400 hover:shadow-md hover:shadow-yellow-300 shadow-none  rounded p-2"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default CTA;
