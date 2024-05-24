import type { NextPage } from "next";

export type PostType = {
  className?: string;
};

const Post: NextPage<PostType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[147px] flex flex-col items-start justify-start pt-[15.8px] px-0 pb-6 box-border gap-[24px] max-w-full z-[1] text-left text-13xl text-snow font-inter mq725:h-auto ${className}`}
    >
      <div className="w-[643px] flex flex-row items-start justify-start py-0 px-[29px] box-border max-w-full shrink-0">
        <div className="flex-1 flex flex-row items-start justify-start gap-[25.4px] max-w-full mq725:flex-wrap">
          <textarea
            className="[border:none] bg-gainsboro h-[107.2px] w-[174.3px] [outline:none] relative rounded-lg min-w-[174.3px] z-[1] mq725:flex-1"
            rows={5}
            cols={9}
          />
          <div className="flex-1 flex flex-row items-start justify-start relative min-w-[250px] max-w-full">
            <div className="h-[139.6px] w-[614.6px] absolute !m-[0] bottom-[-44.6px] left-[-214.8px] rounded-mini bg-lightpink" />
            <div className="flex-1 relative font-medium inline-block max-w-full z-[1] mq1000:text-7xl mq450:text-lgi">
              Heading or a Catchy TagLine
            </div>
          </div>
        </div>
      </div>
      <div className="w-[660.6px] h-1 relative box-border max-w-full shrink-0 border-t-[4px] border-solid border-white" />
    </div>
  );
};

export default Post;