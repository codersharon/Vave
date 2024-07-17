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
          <div className="flex items-center justify-between w-full">
            <h1 className="font-[Inter] border-b-4 border-black font-extrabold xl:text-4xl ">
              Create
            </h1>
            <button className="bg-purple-600 p-2 rounded-xl font-semibold font-[Inter] hover:bg-purple-700 hover:shadow-lg hover:shadow-black ">
              Submit
            </button>
          </div>
          <div className="flex items-start justify-between w-full h-full">
            <div className="bg-gray-400 w-1/2 rounded-md">s</div>
            <div className="w-1/2 flex flex-col items-center justify-start mx-2">
              <input
                type="text"
                id="title"
                name="title"
                className="w-full text-4xl font-extrabold bg-transparent font-[Inter] outline-none p-2 mb-2"
              />
              <textarea
                name="Content"
                id="Content"
                className="w-full font-[NewsReader] bg-gray-400 text-black rounded-md outline-none p-2"
              ></textarea>
            </div>
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
