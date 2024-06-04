import React from "react";
import Recents from "./recents";
import Tech from "./tech";
import Business from "./business";
import Science from "./science";

const Content = ({ data }) => {
  return (
    <div className="w-full min-[1920px]:w-3/5 flex flex-col items-center justify-center">
      <Recents posts={data.posts} highlights={data.highlights} />
      <Tech news={data.news.TechN} />
      <Business news={data.news.BusinessN} />
      <Science news={data.news.ScienceN} />
    </div>
  );
};

export default Content;
