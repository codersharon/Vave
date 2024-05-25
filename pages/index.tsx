import Hero from "./components/hero";
import Navigation from "./components/navigation";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <Navigation />
      <Hero />
    </main>
  );
};

export default Home;
