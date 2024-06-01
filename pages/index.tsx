import Content from "./components/content";
import CTA from "./components/cta";
import Hero from "./components/hero";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState({});
  const getd = async () => {
    const res = await fetch("/api/", {
      method: "GET",
    });
    await setData(res.json());
  };
  getd();
  return (
    <main className="flex flex-col items-center justify-center">
      <Navigation />
      <Hero posts={data} />
      <Content />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
