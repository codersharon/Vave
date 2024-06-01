import React, { useState } from "react";
import Topic from "./topic";

const Hero = (props) => {
  // const [posts, setPosts] = useState(props.posts ? props.posts : []);
  // console.log(posts);
  return (
    <div className="mt-12 pb-10 w-full min-[1920px]:w-3/5 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around">
        {/* {posts.map((post) => {
          return <Topic />;
        })} */}
      </div>
    </div>
  );
};

export default Hero;
