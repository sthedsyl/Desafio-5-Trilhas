import Hero from "./_components/hero";
import Carrossel from "./_components/carousel";

const Artigos = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="max-w-7xl w-full px-4 py-8 flex flex-col items-center">
        <Hero />
        <Carrossel />
      </div>
    </div>
  );
};

export default Artigos;
