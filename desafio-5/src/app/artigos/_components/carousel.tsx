import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";

interface CarouselProps {
  className?: string;
  props: {
    title: string;
    image: string;
    description: string;
    href: string;
  };
}

const CarrosselCard = ({ props }: CarouselProps) => {
  return (
    <Card className="flex flex-col items-center justify-center h-full gap-4 px-8 ">
      <img
        src={props.image}
        alt={props.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-2xl font-bold w-full text-left">{props.title}</h2>
      <p className="mt-2 text-gray-600 w-full text-left">{props.description}</p>
      <Button variant="default" asChild>
        <Link to={props.href}>Ler mais</Link>
      </Button>
    </Card>
  );
};

const Carrossel = () => {
  const articles = [
    {
      title: "Artigo 1",
      image: "https://thumbs.dreamstime.com/b/wallpaper-de-fundo-cinza-claro-abstrato-vazio-sala-est%C3%BAdio-usada-para-exibi%C3%A7%C3%A3o-produto-e-site-templatebackground-exibir-o-254939223.jpg",
      description: "Descrição do artigo 1",
      href: "#",
    },
    {
      title: "Artigo 2",
      image: "https://thumbs.dreamstime.com/b/wallpaper-de-fundo-cinza-claro-abstrato-vazio-sala-est%C3%BAdio-usada-para-exibi%C3%A7%C3%A3o-produto-e-site-templatebackground-exibir-o-254939223.jpg",
      description: "Descrição do artigo 2",
      href: "#",
    },
    {
      title: "Artigo 3",
      image: "https://thumbs.dreamstime.com/b/wallpaper-de-fundo-cinza-claro-abstrato-vazio-sala-est%C3%BAdio-usada-para-exibi%C3%A7%C3%A3o-produto-e-site-templatebackground-exibir-o-254939223.jpg",
      description: "Descrição do artigo 3",
      href: "#",
    },
    {
      title: "Artigo 4",
      image: "https://thumbs.dreamstime.com/b/wallpaper-de-fundo-cinza-claro-abstrato-vazio-sala-est%C3%BAdio-usada-para-exibi%C3%A7%C3%A3o-produto-e-site-templatebackground-exibir-o-254939223.jpg",
      description: "Descrição do artigo 4",
      href: "#",
    },
  ];

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className=""
    >
      <CarouselContent>
        {articles.map((article, index) => (
          <CarouselItem key={index} className="basis-1/3">
            <CarrosselCard props={article} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
};

export default Carrossel;
