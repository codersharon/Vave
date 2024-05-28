import Content from "./components/content";
import CTA from "./components/cta";
import Hero from "./components/hero";
import Navigation from "./components/navigation";
import Footer from "./footer";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navigation />
      <Hero />
      <Content />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
