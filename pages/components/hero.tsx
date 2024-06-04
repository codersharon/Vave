import React, { useState } from "react";
import Topic from "./topic";

const Hero = (props) => {
  const [topics, setTopics] = useState(props? props.topics: [])
  console.log(props);
  return (
    <div className="mt-12 pb-10 w-full min-[1920px]:w-3/5 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around">
        {topics ? (
          topics.map(({title, image, content, createdAt, _id}) => {
            return <Topic key={_id} title={title} image={image} content={content} auhtor={'Sharon'} />;
          })
        ) : (
          <h1>Hello World!</h1>
        )}
      </div>
    </div>
  );
};


export default Hero;
