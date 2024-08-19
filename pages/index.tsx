import Content from "./components/content";
import CTA from "./components/cta";
import Hero from "./components/hero";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

const Home = ({ topics, highlights, posts, news }) => {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navigation />
      <Hero topics={topics} />
      <Content data={{ highlights, posts, news }} />
      <CTA />
      <Footer />
    </main>
  );
};

export const getServerSideProps = async () => {
  const res1 = await fetch("http://localhost:3000/api?category1=dailytopic", {
    method: "GET",
  });
  const res2 = await fetch("http://localhost:3000/api/", { method: "GET" });
  const res3 = await fetch("http://localhost:3000/api?category1=dailyhighlight", {
    method: "GET",
  });
  const Nres1 = await fetch("http://localhost:3000/api?category1=tech", {
    method: "GET",
  });
  const Nres2 = await fetch("http://localhost:3000/api?category1=business", {
    method: "GET",
  });
  const Nres3 = await fetch("http://localhost:3000/api?category1=science", {
    method: "GET",
  });
  const topics = await res1.json();
  const posts = await res2.json();
  const highlights = await res3.json();
  const TechN = await Nres1.json();
  const BusinessN = await Nres2.json();
  const ScienceN = await Nres3.json();
  const news = { TechN, BusinessN, ScienceN };
  return {
    props: { topics, highlights, posts, news },
  };
};

export default Home;
