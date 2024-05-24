import type { NextPage } from "next";
import News2 from "./news2";

export type TechType = {
  className?: string;
};

const Tech: NextPage<TechType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-salmon flex flex-col items-start justify-start pt-[87px] pb-[274px] pr-10 pl-[42px] box-border gap-[107.3px] max-w-full text-center text-45xl text-black font-inria-sans mq725:gap-[54px] mq725:pl-[21px] mq725:pt-[37px] mq725:pb-[116px] mq725:box-border mq1000:pt-[57px] mq1000:pb-[178px] mq1000:box-border mq450:gap-[27px] ${className}`}
    >
      <div className="w-[1280px] h-[986px] relative bg-salmon hidden max-w-full" />
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-px pl-0">
        <h1 className="m-0 w-[286.7px] relative text-inherit font-normal font-inherit inline-block shrink-0 z-[1] mq1000:text-32xl mq450:text-19xl">
          <p className="m-0">Tech</p>
        </h1>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[47px] max-w-full text-13xl font-newsreader mq725:gap-[23px]">
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[276px] max-w-full">
          <News2 />
        </div>
        <News2
          propAlignSelf="unset"
          propFlex="1"
          propMinWidth="276px"
          propBackgroundColor="#5ab0ff"
        />
        <News2
          propAlignSelf="unset"
          propFlex="1"
          propMinWidth="276px"
          propBackgroundColor="#5ab0ff"
        />
      </div>
    </section>
  );
};

export default Tech;