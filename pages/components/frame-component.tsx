import type { NextPage } from "next";
import Topic from "./topic";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[34.2px] box-border gap-[0.1px] max-w-full text-center text-13xl text-white font-newsreader ${className}`}
    >
      <div className="self-stretch h-[729px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[99px] px-0 pb-[100.3px] box-border gap-[100.3px] max-w-full mq725:gap-[50px] mq1000:pt-16 mq1000:pb-[65px] mq1000:box-border mq450:gap-[25px] mq450:pt-[42px] mq450:pb-[42px] mq450:box-border mq1050:h-auto">
        <div className="w-[273px] h-[3px] relative box-border shrink-0 border-t-[3px] border-solid border-dimgray-100" />
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[17px] pl-4 box-border max-w-full shrink-0">
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[71.5px] max-w-full mq725:gap-[36px] mq450:gap-[18px]">
            <Topic />
            <Topic propBackground="linear-gradient(90deg, #5ca7ff 25%, #ff5151)" />
            <Topic propBackground="linear-gradient(90deg, #d45cff, #ff5151 65.9%)" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] text-left text-45xl font-inter">
        <h1 className="m-0 w-[286.7px] relative text-inherit font-medium font-inherit inline-block shrink-0 mq1000:text-32xl mq450:text-19xl">
          Recently
        </h1>
      </div>
    </section>
  );
};

export default FrameComponent;