import type { NextPage } from "next";
import Navigation1 from './components/navigation1'
import FrameComponent from "./components/frame-component";
import Posts from "./components/posts";
import Highights from "./components/highlights";
import Tech from "./components/tech";
import News1 from "./components/news1";
import News from "./components/news";
import CTA from "./components/c-t-a";
import Footer from "./components/footer";

const Home: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <Navigation1 />
      <FrameComponent />
      <section className="self-stretch flex flex-row items-start justify-start [row-gap:20px] max-w-full mq1050:flex-wrap">
        <Posts />
        <Highights />
      </section>
      <Tech />
      <section className="self-stretch bg-cornflowerblue-200 flex flex-col items-start justify-start pt-[87px] pb-[275px] pr-10 pl-[42px] box-border gap-[107px] max-w-full text-center text-45xl text-black font-inria-sans mq725:gap-[53px] mq725:pl-[21px] mq725:pt-[37px] mq725:pb-[116px] mq725:box-border mq1000:pt-[57px] mq1000:pb-[179px] mq1000:box-border mq450:gap-[27px]">
        <div className="w-[1280px] h-[986px] relative bg-cornflowerblue-200 hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-px pl-0 box-border max-w-full">
          <h1 className="m-0 w-[327px] relative text-inherit font-normal font-inherit inline-block shrink-0 max-w-full z-[1] mq1000:text-32xl mq450:text-19xl">{`Businesses `}</h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[47px] max-w-full mq725:gap-[23px]">
          <News1 />
          <News1 />
          <News1 />
        </div>
      </section>
      <section className="self-stretch bg-violet flex flex-col items-end justify-start pt-[87px] px-[42px] pb-[275px] box-border gap-[107px] max-w-full text-center text-45xl text-black font-inria-sans mq725:gap-[53px] mq725:pt-[37px] mq725:px-[21px] mq725:pb-[116px] mq725:box-border mq1000:pt-[57px] mq1000:pb-[179px] mq1000:box-border mq450:gap-[27px]">
        <div className="w-[1280px] h-[986px] relative bg-violet hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full">
          <h1 className="m-0 w-[327px] relative text-inherit font-normal font-inherit inline-block shrink-0 max-w-full z-[1] mq1000:text-32xl mq450:text-19xl">
            Science
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[46px] max-w-full mq725:gap-[23px]">
          <News />
          <News />
          <News />
        </div>
      </section>
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;