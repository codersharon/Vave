import React, { useState } from "react";
import Topic from "./topic";

const Hero = (props) => {
  const [topics, setTopics] = useState(props ? props.topics : []);
  // const [topics, setTopics] = useState();
  const topic1 = topics[0];
  const topic2 = topics[1];
  const topic3 = topics[2];
  return (
    <div className="border-b border-white mt-12 pb-10 w-full min-[1920px]:w-3/5 flex flex-col items-center justify-center">
      {topics ? (
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around">
          <Topic
            id={topic1._id ? topic1._id : ""}
            title={topic1.title.slice(0, 32) + "..."}
            image={topic1.image ? topic1.image : "/Post_Background.jpg"}
            content={topic1.content}
            auhtor={"Sharon"}
            key={topic1._id}
          />
          <Topic
            id={topic2._id ? topic2._id : ""}
            title={topic2.title.slice(0, 32) + "..."}
            image={topic2.image ? topic2.image : "/Post_Background.jpg"}
            content={topic2.content}
            auhtor={"Sharon"}
            key={topic2._id}
          />
          <Topic
            id={topic3._id ? topic3._id : ""}
            title={topic3.title.slice(0, 32) + "..."}
            image={topic1.image ? topic3.image : "/Post_Background.jpg"}
            content={topic3.content}
            auhtor={"Sharon"}
            key={topic3._id}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Hero;
