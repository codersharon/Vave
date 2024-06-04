import React from "react";
import Post from "./post";
import Highlight from "./highlight";

const Recents = ({ posts, highlights }) => {
  return (
    <div className=" w-fit pb-16 border-b">
      <h1 className="font-medium text-center w-full mt-12 md:mb-12 font-[Oswald] text-7xl text-white">
        Recently
      </h1>
      <div className="flex flex-col items-center justify-around md:flex-row md:items-start md:justify-center">
        <div className="pb-20 w-full border-l-2 border-white ml-2 border-b md:border-b-0">
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
        <div className="mr-2 md:ml-10 w-full border-r md:border-l-2 border-white flex flex-col justify-start items-center md:items-center md:justify-start">
          {highlights ? highlights.map(({ title, content, _id, image }) => {
              return (
                <Highlight
                  title={title}
                  content={content}
                  image={image}
                  key={_id}
                  id={_id}
                />
              );
            }) : (
            <h1 className="text-white text-3xl font-extrabold">
              No Highlight Today
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recents;
