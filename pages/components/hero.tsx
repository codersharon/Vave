import React, { useState } from "react";
import Topic from "./topic";

const Hero = ({ posts }) => {
  console.log(posts);
  const [data, setData] = useState(posts ? posts.data : []);

  return (
    <div className="mt-12 pb-10 w-full min-[1920px]:w-3/5 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around">
        {posts ? (
          data.map((post) => {
            return <Topic />;
          })
        ) : (
          <h1>Hello World!</h1>
        )}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://837e0226-7ed3-4449-ac31-894d3f9dc9c6-00-1hs8ogvjhzxzs.sisko.replit.dev/api?category1=dailytopic",
    { method: "GET" },
  );
  const data = await res.json();
  return {
    props: { data },
  };
};

export default Hero;
