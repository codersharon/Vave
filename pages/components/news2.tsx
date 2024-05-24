import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type News2Type = {
  className?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const News2: NextPage<News2Type> = ({
  className = "",
  propAlignSelf,
  propFlex,
  propMinWidth,
  propBackgroundColor,
}) => {
  const newsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  const imageLeftStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start max-w-full z-[1] text-center text-13xl text-black font-newsreader ${className}`}
      style={newsStyle}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[15px] box-border relative gap-[20px] max-w-full">
        <div
          className="w-full h-[110px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] bg-cornflowerblue-100"
          style={imageLeftStyle}
        />
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

export default News2;