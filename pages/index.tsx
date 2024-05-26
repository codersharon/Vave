import Content from "./components/content";
import Hero from "./components/hero";
import Navigation from "./components/navigation";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navigation />
      <Hero />
      <Content />
    </main>
  );
};

export default Home;
