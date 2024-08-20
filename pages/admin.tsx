import React, { useState } from "react";
import Post from "./components/post";
import Navigation from "./components/navigation";
import { useRouter } from "next/router";
import Link from "next/link";

const Admin = ({ posts }) => {
  const router = useRouter();

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    imageURL: "",
  });

  const [categories, setCategories] = useState([]);

  async function AddPost(imageURL, title, content, links) {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      image: imageURL,
      title: title,
      content: content,
      Category: categories,
      links: links,
    });

    let response = await fetch("/api/", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    alert("Post Uploaded");
    router.reload();
  }

  const OnChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const OnCategories = (e) => {
    // if (categories.includes(e.target.name) == true) {
    //   let arr = categories;
    //   delete arr[arr.indexOf(e.target.name)];
    //   console.log(arr);
    //   setCategories(arr);
    //   e.target.style.background = "transparent";
    //   e.target.style.color = "black";
    // } else
    if (categories.includes(e.target.name) == false) {
      const n = e.target.name;
      setCategories(categories.concat(n.toLowerCase()));
      e.target.style.background = "white";
      e.target.style.color = "black";
    }
  };


  function extractHttpsLinks(text) {
    // Regular expression to match HTTPS links
    const regex = /https:\/\/[^\s/$.?#].[^\s]*/g;

    // Find all matches in the text
    const matches = text.match(regex);

    // Return the array of matches or an empty array if none found
    return matches;
  }
  
  const handleSave = async() => {
    const text = newPost.content;
    const links = await extractHttpsLinks(text)
    await AddPost(newPost.imageURL, newPost.title, newPost.content, links);
  };
  
  return (
    <div>
      <Navigation />
      <div className="flex flex-col items-center justify-center">
        <div className="bg-orange-700 w-full md:w-10/12 p-5">
          <div className="mb-10 flex items-center justify-between w-full">
            <h1 className="ml-[40%] md:ml-[45%] font-[Inter] border-b-4 border-black font-extrabold text-3xl xl:text-4xl ">
              Create
            </h1>
            <button
              onClick={handleSave}
              className="bg-slate-950 p-2 rounded-xl font-semibold font-[Inter] hover:animate-bounce text-white "
            >
              Submit
            </button>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center md:justify-between w-full h-full">
            <div className="p-2 bg-black w-full md:w-1/2 rounded-md h-fit">
              <input
                type="text"
                placeholder="Image URL"
                id="imageURL"
                onChange={OnChange}
                name="imageURL"
                className="w-full text-xl font-bold bg-white rounded font-[Inter] outline-none p-2 mb-2"
              />
              <img className="rounded-md" src={newPost.imageURL} alt="" />
            </div>
            <div className="rounded-lg p-2 bg-black text-white w-full md:w-1/2 flex flex-col items-center justify-start mx-2">
              <input
                type="text"
                id="title"
                onChange={OnChange}
                maxLength={60}
                name="title"
                placeholder="Title"
                className="rounded text-black bg-orange-700 w-full text-3xl font-extrabold font-[Inter] outline-none p-2 mb-2"
              />
              <textarea
                name="content"
                placeholder="Content..."
                id="content"
                onChange={OnChange}
                className="min-h-28 max-h-72 w-full font-[NewsReader] bg-white text-gray-700 rounded-md outline-none p-4"
              ></textarea>
              <div className="my-10 grid-flow-col text-center md:w-full">
                <button
                  name="DailyHighlight"
                  onClick={OnCategories}
                  className="mx-2 my-2 w-fit bg-transparent border-white border-2 p-2 font-semibold font-[Inter] hover:bg-yellow-500 "
                >
                  DailyHighlight
                </button>
                <button
                  name="DailyTopic"
                  onClick={OnCategories}
                  className="mx-2 my-2 w-fit bg-transparent border-white border-2 p-2 font-semibold font-[Inter] hover:bg-green-500 "
                >
                  DailyTopic
                </button>
                <button
                  name="Tech"
                  onClick={OnCategories}
                  className="mx-2 my-2 w-fit bg-transparent border-white border-2 p-2 font-semibold font-[Inter] hover:bg-white "
                >
                  Tech
                </button>
                <button
                  name="Business"
                  onClick={OnCategories}
                  className="mx-2 my-2 w-fit bg-transparent border-white border-2 p-2 font-semibold font-[Inter] hover:bg-blue-500 "
                >
                  Business
                </button>
                <button
                  name="Science"
                  onClick={OnCategories}
                  className="mx-2 my-2 w-fit bg-transparent border-white border-2 p-2 font-semibold font-[Inter] hover:bg-[#C93EB3] "
                >
                  Science
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-orange-700 w-full md:w-6/12 p-5 mt-10 flex flex-col items-center justify-center">
          <h1 className="font-[Inter] border-b-4 border-black font-extrabold w-fit text-3xl xl:text-4xl ">
            All Posts
          </h1>

          <div className="flex flex-col items-start justify-center mt-10">
            {posts.map(({ title, image, createdAt, _id }) => {
              const deletePost = async () => {
                if (
                  confirm(
                    "Are you sure you want to delete this post from the VAVE database?",
                  )
                ) {
                  // Save it!
                  const res = await fetch(`/api/post?id=${_id}`, {
                    method: "DELETE",
                  });

                  const result = await res.json();
                  alert("This post was deleted from the VAVE database.");
                  router.reload();
                } else {
                  // Do nothing!
                  alert("This post was not deleted from the VAVE database.");
                }
              };
              return (
                <Link href={"/blogpost/" + _id} key={_id}>
                  <div className="hover:bg-orange-800 decoration-white w-full border-b-2 p-10 border-white flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start">
                    <div className="flex flex-col items-start justify-start p-1">
                      <img
                        className="rounded w-[120px] h-[120px] m-2"
                        src={image ? image : "/Post_Background.jpg"}
                        alt="post"
                      />
                      <li className="text-white w-full">
                        {createdAt.slice(0, 10)}
                      </li>
                    </div>
                    <h1 className="mx-5 hover:underline text-xl h-full font-bold font-[Oswald] lg:text-3xl text-white">
                      {title.slice(0, 36)}...
                    </h1>
                    <button
                      onClick={deletePost}
                      className="hover:animate-pulse"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#e8eaed"
                      >
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                      </svg>
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps = async () => {
  const res = await fetch(
    "http://localhost:3000/api?category1=all",
    {
      method: "GET",
    },
  );
  const posts = await res.json();
  return {
    props: { posts },
  };
};
export default Admin;
