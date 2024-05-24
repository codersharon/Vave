import type { NextPage } from "next";
import Highlight1 from "./highlight1";

export type HighightsType = {
  className?: string;
};

const Highights: NextPage<HighightsType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[705px] w-[530.8px] flex flex-row items-end justify-start pt-0 px-[34px] pb-[137px] box-border relative gap-[67.2px] min-w-[530.8px] max-w-full z-[2] text-center text-13xl text-black font-newsreader mq725:pb-[89px] mq725:box-border mq725:min-w-full mq1000:ml-0 mq450:gap-[34px] mq1050:flex-1 ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray" />
      <div className="self-stretch flex flex-col items-start justify-end pt-0 px-0 pb-[13.5px]">
        <img
          className="w-0.5 flex-1 relative max-h-full object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/line-3.svg"
        />
      </div>
      <Highlight1 />
    </div>
  );
};

export default Highights