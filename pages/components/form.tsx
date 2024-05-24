import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FormType = {
  className?: string;
  joinUs?: string;
  phoneNumberPlaceholder?: string;
  dateOfBirthDDMMPlaceholde?: string;

  /** Style props */
  propFontSize?: CSSProperties["fontSize"];
  propHeight?: CSSProperties["height"];
};

const Form: NextPage<FormType> = ({
  className = "",
  joinUs,
  phoneNumberPlaceholder,
  dateOfBirthDDMMPlaceholde,
  propFontSize,
  propHeight,
}) => {
  const dateOfBirthStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: propFontSize,
      height: propHeight,
    };
  }, [propFontSize, propHeight]);

  return (
    <div
      className={`w-[437px] flex flex-row items-start justify-start max-w-full z-[1] ${className}`}
    >
      <form className="m-0 flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border relative gap-[13px] max-w-full">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-mediumorchid" />
        <h3 className="m-0 self-stretch relative text-29xl font-normal font-italiana text-black text-center z-[1] mq1000:text-19xl mq450:text-10xl">
          {joinUs}
        </h3>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start p-2 box-border relative max-w-full z-[1]">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-10xs bg-gainsboro" />
            <input
              className="w-[89.5px] [border:none] [outline:none] font-inter text-xl bg-[transparent] h-6 relative text-dimgray-200 text-left inline-block p-0 z-[1] mq450:text-base"
              placeholder="Name"
              type="text"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start p-2 box-border relative max-w-full z-[1]">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-10xs bg-gainsboro" />
            <input
              className="w-[95.9px] [border:none] [outline:none] font-inter text-xl bg-[transparent] h-6 relative text-dimgray-200 text-left inline-block p-0 z-[1] mq450:text-base"
              placeholder="E-Mail"
              type="text"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-6 pl-5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start p-2 box-border relative max-w-full z-[1]">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-10xs bg-gainsboro" />
            <input
              className="w-[231.6px] [border:none] [outline:none] font-inter text-xl bg-[transparent] h-6 relative text-dimgray-200 text-left inline-block p-0 z-[1] mq450:text-base"
              placeholder={phoneNumberPlaceholder}
              type="text"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[21px] pl-5 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-start pt-2 px-2 pb-[13px] box-border relative max-w-full z-[1]">
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-10xs bg-gainsboro" />
            <input
              className="w-[354.1px] [border:none] [outline:none] font-inter text-base bg-[transparent] h-[19px] relative text-dimgray-200 text-left inline-block max-w-full p-0 z-[1]"
              placeholder={dateOfBirthDDMMPlaceholde}
              type="text"
              style={dateOfBirthStyle}
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="w-[409px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <button className="cursor-pointer [border:none] py-[5px] pr-[5px] pl-[7px] bg-[transparent] w-[157px] flex flex-row items-start justify-start box-border relative z-[1]">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-10xs bg-gold" />
              <div className="flex-1 relative text-base font-medium font-inter text-black text-center z-[1]">
                Submit
              </div>
            </button>
          </div>
          <div className="self-stretch relative text-mini font-inria-sans text-black whitespace-pre-wrap text-center z-[1]">{`Your Data is not shared for advertisement.  `}</div>
        </div>
      </form>
    </div>
  );
};

export default Form;