import React, { useState } from "react";
import Topic from "./topic";

const Hero = (props) => {
  const [topics, setTopics] = useState(props ? props.topics : []);
  const topic1 = topics[0];
  const topic2 = topics[1];
  const topic3 = topics[2];
  return (
    <div className="mt-12 pb-10 w-full min-[1920px]:w-3/5 flex flex-col items-center justify-center">
      {topics ? (
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around">
          <Topic
            key={topic1._id}
            id={topics._id}
            title={topic1.title}
            image={topic1.image}
            content={topic1.content}
            auhtor={"Sharon"}
          />
          <Topic
            id={topics._id}
            key={topic2._id}
            title={topic2.title}
            image={topic2.image}
            content={topic2.content}
            auhtor={"Sharon"}
          />
          <Topic
            id={topics._id}
            key={topic3._id}
            title={topic3.title}
            image={topic3.image}
            content={topic3.content}
            auhtor={"Sharon"}
          />
        </div>
      ) : (
        <h1>Hello World!</h1>
      )}
    </div>
  );
};

export default Hero;
