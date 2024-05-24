import type { NextPage } from "next";

export type Highlight1Type = {
  className?: string;
};

const Highlight1: NextPage<Highlight1Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-[501px] w-[322.2px] flex flex-col items-start justify-start pt-0 px-0 pb-[52px] box-border relative gap-[15px] max-w-[calc(100%_-_69px)] z-[1] text-center text-13xl text-black font-newsreader mq725:pb-[34px] mq725:box-border ${className}`}
    >
      <div className="w-full h-36 absolute !m-[0] right-[0px] bottom-[0px] left-[0px] bg-goldenrod-100" />
      <div className="self-stretch flex-1 relative rounded-xl bg-plum z-[1]" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[60px] pl-[58px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 relative font-semibold z-[1] mq1000:text-7xl mq450:text-lgi">
          Heading or a catchy tagline
        </div>
      </div>
    </div>
  );
};

export default Highlight1;