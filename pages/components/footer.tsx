import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[53px] px-[45px] pb-[39.3px] box-border relative [row-gap:20px] max-w-full text-center text-base text-white font-inter mq1000:flex-wrap mq1000:pl-[22px] mq1000:pr-[22px] mq1000:box-border ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-black" />
      <img
        className="h-[95.7px] w-[110px] relative object-cover z-[1]"
        alt=""
        src="/tech-vave-dark-1-1@2x.png"
      />
      <div className="w-[620px] flex flex-col items-start justify-start pt-[29px] px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-12 gap-[31px] z-[1] mq725:flex-wrap mq725:gap-[15px] mq725:pl-6 mq725:pr-6 mq725:box-border">
          <div className="relative font-medium inline-block min-w-[38px]">
            Tech
          </div>
          <div className="relative font-medium inline-block min-w-[58px]">
            Join-us
          </div>
          <div className="relative font-medium inline-block min-w-[69px]">{`Business `}</div>
          <div className="relative font-medium inline-block min-w-[92px]">
            News-letter
          </div>
          <div className="relative font-medium inline-block min-w-[61px]">
            Science
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;