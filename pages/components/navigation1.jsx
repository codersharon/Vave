import { NextPage } from "next";

const Navigation1 = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch h-[223px] flex flex-row items-start justify-between pt-[47px] pb-9 pr-[39px] pl-[50px] box-border relative max-w-full gap-[20px] text-left text-5xl text-white font-inter mq725:pl-[25px] mq725:box-border ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-black" />
      <div className="flex flex-col items-start justify-start pt-14 px-0 pb-0">
        <div className="relative font-medium inline-block min-w-[64.5px] z-[1]">
          Tech
        </div>
      </div>
      <div className="w-[118.6px] flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border">
        <div className="self-stretch relative font-medium whitespace-nowrap z-[1]">{`Business `}</div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[45.6px] max-w-full mq450:gap-[23px]">
        <div className="w-[105.9px] flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border">
          <div className="self-stretch relative font-medium z-[1]">Science</div>
        </div>
        <div className="self-stretch w-[165.5px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/tech-vave-dark-1@2x.png"
          />
        </div>
        <div className="w-[100.1px] flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border">
          <div className="self-stretch relative font-medium z-[1]">Join-us</div>
        </div>
      </div>
      <div className="w-[157.7px] flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border">
        <div className="self-stretch relative font-medium z-[1]">
          News-letter
        </div>
      </div>
      <div className="w-[86.3px] flex flex-col items-start justify-start pt-14 px-0 pb-0 box-border">
        <div className="self-stretch relative font-medium z-[1]">Log-in</div>
      </div>
    </header>
  );
};

export default Navigation1;