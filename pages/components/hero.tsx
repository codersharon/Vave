import React, { useState } from "react";
import Topic from "./topic";

const Hero = (props) => {
  const [topics, setTopics] = useState(props ? props.topics : []);
  const [postImg1, setPostImg1] = useState(
    topics[0].image ? topics[0].image : "/Post_Background.jpg");
  const [postImg2, setPostImg2] = useState(
    topics[1] ? topics[1].image : "/Post_Background.jpg");
  const [postImg3, setPostImg3] = useState(
    topics[2] ? topics[2].image : "/Post_Background.jpg");
  if (topics[2] != null) {
    const topic1 = topics[0];
    const topic2 = topics[1];
    const topic3 = topics[2];
    if (postImg1 == "" || postImg1 == null) {
      setPostImg1("/Post_Background.jpg");
    }
    if (postImg2 == "" || postImg2 == null) {
      setPostImg2("/Post_Background.jpg");
    }
    if (postImg3 == "" || postImg3 == null) {
      setPostImg3("/Post_Background.jpg");
    }
    return 
    <div className="border-b border-white mt-12 pb-10 w-full min-[1920px]:w-3/5 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around">
          <Topic
            id={topic1._id ? topic1._id : ""}
            title={topic1.title.slice(0, 32) + "..."}
            image={postImg1}
            content={topic1.content}
            auhtor={"Sharon"}
            key={topic1._id}
          />
          <Topic
            id={topic2._id ? topic2._id : ""}
            title={topic2.title.slice(0, 32) + "..."}
            image={postImg2}
            content={topic2.content}
            auhtor={"Sharon"}
            key={topic2._id}
          />
          <Topic
            id={topic3._id ? topic3._id : ""}
            title={topic3.title.slice(0, 32) + "..."}
            image={postImg1}
            content={topic3.content}
            auhtor={"Sharon"}
            key={topic3._id}
          />
        </div>
    </div>
  } else {
    const topic1 = topics[0];
    if (postImg1 == "" || postImg1 == null) {
      setPostImg1("/Post_Background.jpg");
    }
      return (
        <div className="border-b border-white mt-12 pb-10 w-full min-[1920px]:w-3/5 flex flex-col items-center justify-center">
         <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-around">
          <Topic
            id={topic1._id ? topic1._id : ""}
            title={topic1.title.slice(0, 32) + "..."}
            image={postImg1}
            content={topic1.content}
            auhtor={"Sharon"}
            key={topic1._id}
          />
        </div>
        </div>)
}}

export default Hero;
