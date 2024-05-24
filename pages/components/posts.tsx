import type { NextPage } from "next";
import Post from "./post";

export type PostsType = {
  className?: string;
};

const Posts: NextPage<PostsType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start py-0 px-4 box-border relative gap-[0.2px] min-w-[487px] max-w-full text-left text-13xl text-snow font-inter mq725:min-w-full ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] bg-whitesmoke" />
      <img
        className="h-[485.2px] w-[3.9px] relative object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/line-2.svg"
      />
      <div className="w-[702px] flex flex-col items-start justify-start pt-[151px] px-0 pb-0 box-border max-w-[calc(100%_-_4px)]">
        <Post />
      </div>
    </div>
  );
};

export default Posts;
