import React, { useState } from "react";
import Post from "./components/post";
import Navigation from "./components/navigation";

const Admin = ({ posts }) => {
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    image: "",
    category: "",
  });

  function AddPost(img, title, content, category) {
    const res = fetch("/api/", {
      method: "POST",
      body: JSON.stringify({
        postimg: img,
        title: title,
        content: content,
        Category: category,
      }),
    });
  }

  const OnChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    AddPost(newPost.image, newPost.title, newPost.content, newPost.category);
    // document.getElementById("title1").value = "";
    // document.getElementById("description1").value = "";
    // document.getElementById("tags1").value = "";
  };

  return (
    <div>
      <Navigation />
      <div className="flex flex-col items-center justify-center">
        <div className="bg-orange-700 w-10/12 p-5">
          <div className="mb-10 flex items-center justify-between w-full">
            <h1 className="ml-[45%] font-[Inter] border-b-4 border-black font-extrabold xl:text-4xl ">
              Create
            </h1>
            <button className="bg-purple-600 p-2 rounded-xl font-semibold font-[Inter] hover:bg-purple-700 hover:shadow-md hover:shadow-black ">
              Submit
            </button>
          </div>
          <div className="flex items-start justify-between w-full h-full">
            <div className="bg-gray-400 w-1/2 rounded-md h-fit">
              <img
                className="rounded-md"
                src="https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x500/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/22888569/acastro_210929_4779_0001.jpg"
                alt=""
              />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-start mx-2">
              <input
                type="text"
                id="title"
                name="title"
                className="w-full text-3xl font-extrabold bg-transparent font-[Inter] outline-none p-2 mb-2"
              />
              <textarea
                name="Content"
                id="Content"
                className="min-h-28 max-h-72 w-full font-[NewsReader] bg-gray-400 text-gray-700 rounded-md outline-none p-4"
              ></textarea>
            </div>
          </div>
          <div className="my-10 flex items-center justify-around w-full">
            <button className="mx-2 bg-transparent border-white border-2 p-2 font-semibold font-[Inter] hover:bg-yellow-500 ">
              DailyHilight
            </button>
            <button className="mx-2 bg-transparent border-white border-2 p-2 font-semibold font-[Inter] hover:bg-green-500 ">
              DailyTopic
            </button>
            <button className="mx-2 bg-transparent border-white border-2 p-2 font-semibold font-[Inter] hover:bg-white ">
              Tech
            </button>
            <button className="mx-2 bg-transparent border-white border-2 p-2 font-semibold font-[Inter] hover:bg-blue-500 ">
              Business
            </button>
            <button className="mx-2 bg-transparent border-white border-2 p-2 font-semibold font-[Inter] hover:bg-[#C93EB3] ">
              Science
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async () => {
  const res = await fetch("http:localhost:3000/api?category1=all", {
    method: "GET",
  });
  const posts = await res.json();
  return {
    props: { posts },
  };
};
export default Admin;
