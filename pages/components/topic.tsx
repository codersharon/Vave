import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TopicType = {
  className?: string;

  /** Style props */
  propBackground?: CSSProperties["background"];
};

const Topic: NextPage<TopicType> = ({ className = "", propBackground }) => {
  const topicImageStyle: CSSProperties = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[27.2px] box-border relative gap-[9px] min-w-[276px] max-w-full text-center text-13xl text-white font-newsreader ${className}`}
    >
      <div
        className="w-full h-[119.6px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(90deg,_#ffa05c_25%,_#ff5151)]"
        style={topicImageStyle}
      />
      <div className="self-stretch h-[429.4px] relative rounded-xl bg-gainsboro z-[1]" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[68px] pl-[67px] mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 relative font-semibold z-[1] mq1000:text-7xl mq450:text-lgi">
          Heading or a catchy tagline
        </div>
      </div>
    </div>
  );
};

export default Topic;