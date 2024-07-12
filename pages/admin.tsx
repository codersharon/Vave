import React, { useState } from "react";
import Post from "./components/post";

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
      body: {
        image: { img },
        title: { title },
        content: { content },
        Category: { category },
      },
    });
  }

  const OnChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    AddPost(newPost.image, newPost.title, newPost.content, newPost.category);
    document.getElementById("title1").value = "";
    document.getElementById("description1").value = "";
    document.getElementById("tags1").value = "";
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-orange-500 p-4 rounded m-5 w-1/2 flex items-start justify-center">
        <div className="bg-gray-300 rounded-lg w-[320px] h-[320px] flex items-center justify-center">
          {/* <h1>Upload An Image!</h1> */}
          <input type="file" name="" id="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <input
            id="title"
            name="title"
            onChange={OnChange}
            type="text"
            className="p-2 font-[Inter] rounded m-2 outline-none"
            placeholder="Title"
          />
          <textarea
            id="content"
            name="content"
            onChange={OnChange}
            className="p-2 font-[NewsReader] rounded m-2 outline-none"
            placeholder="Content"
          />
        </div>
      </div>
      <div className="bg-orange-500 p-4 rounded m-5 w-1/2">
        <h1 className="text-4xl font-bold font-[Inter]">All Posts</h1>
        {posts ? (
          posts.map(({ title, image, createdAt, _id }) => {
            return (
              <Post
                title={title}
                image={image}
                createdAt={createdAt}
                id={_id}
                key={_id}
              />
            );
          })
        ) : (
          <h1>No Post Found</h1>
        )}
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
