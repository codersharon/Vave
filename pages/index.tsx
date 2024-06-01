import Content from "./components/content";
import CTA from "./components/cta";
import Hero from "./components/hero";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

const Home = ({data}) => {
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

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://837e0226-7ed3-4449-ac31-894d3f9dc9c6-00-1hs8ogvjhzxzs.sisko.replit.dev/api/",
    { method: "GET" },
  );
  const data = await res.json();
  return {
    props: { data },
  };
};

export default Home;
