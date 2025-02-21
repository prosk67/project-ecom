import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center min-w-[100vw]">
      <Carousel 
       plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full max-w-7xl">
        <CarouselContent>
          <CarouselItem className="flex justify-center">
            <div className="rounded-2xl my-10 relative w-full h-[60vh] max-w-7xl">
              <div className="rounded-3xl w-full h-full bg-black relative z-1 flex flex-col items-center justify-center text-white">
                <h1 className="text-5xl font-bold mb-4">Welcome to Audio Store</h1>
                <p className="text-xl mb-8">Discover the best audio products</p>
                <Button className="bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded">
                  Shop Now
                </Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <div className="rounded-2xl my-10 relative w-full h-[60vh] max-w-7xl">
              <div className="rounded-3xl w-full h-full bg-black relative z-1 flex flex-col items-center justify-center text-white">
                <h1 className="text-5xl font-bold mb-4">Welcome to Audio Store</h1>
                <p className="text-xl mb-8">Discover the best audio products</p>
                <Button className="bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded">
                  Shop Now
                </Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="flex justify-center">
            <div className="rounded-2xl my-10 relative w-full h-[60vh] max-w-7xl">
              <div className="rounded-3xl w-full h-full bg-black relative z-1 flex flex-col items-center justify-center text-white">
                <h1 className="text-5xl font-bold mb-4">Welcome to Audio Store</h1>
                <p className="text-xl mb-8">Discover the best audio products</p>
                <Button className="bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded">
                  Shop Now
                </Button>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>

      </Carousel>
    </div>
  );
};

export default HeroSection;
