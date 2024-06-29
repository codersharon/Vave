import React from "react";
import Post from "./post-1";

const Science = ({ news }) => {
  return (
    <div
      id="Science"
      className="slide-right zoom flex flex-col items-center justify-center bg-[#C93EB3] text-center w-full"
    >
      <h1 className="font-[Oswald] text-5xl mt-6 text-[#5b2052] text-opacity-60">Science</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {news ? (
          news.map(({ image, content, title, createdAt, _id }) => {
            return (
              <Post
                key={_id}
                id={_id}
                image={image}
                content={content}
                title={title}
                createdAt={createdAt}
                Auth={"Sharon"}
              />
            );
          })
        ) : (
          <h1 className="text-white font-extrabold text-4xl">No News</h1>
        )}
      </div>
    </div>
  );
};

export default Science;
