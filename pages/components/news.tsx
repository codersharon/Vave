import type { NextPage } from "next";

export type NewsType = {
  className?: string;
};

const News: NextPage<NewsType> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 flex flex-row items-start justify-start min-w-[276px] max-w-full z-[1] text-center text-13xl text-black font-newsreader ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border relative gap-[20px] max-w-full">
        <div className="w-full h-[110px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] bg-goldenrod-200" />
        <textarea
          className="[border:none] bg-gainsboro h-[338px] w-auto [outline:none] self-stretch relative rounded-xl z-[1]"
          rows={17}
          cols={18}
        />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[68px] pl-[67px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 relative font-semibold z-[1] mq1000:text-7xl mq450:text-lgi">
            Heading or a catchy tagline
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;