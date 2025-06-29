import Hero from "./_components/hero";
import Carrossel from "./_components/carousel";
import Ondas from "./_assets/ondas.svg"; 

const Artigos = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full relative">
      <div className="max-w-7xl w-full px-4 py-8 flex flex-col items-center">
        <Hero />
        <Carrossel />
      </div>
      <img src={Ondas} className="w-full object-cover z-[-1] -mb-16"/>
    </div>
  );
};

export default Artigos;
