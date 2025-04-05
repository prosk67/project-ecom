import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center min-w-[100vw]">
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
        className="w-full max-w-7xl"
      >
        <CarouselContent>
          {/* Carousel Item 1 */}
          <CarouselItem className="flex justify-center">
            <div className="rounded-2xl my-10 relative w-full h-[60vh] max-w-7xl">
              {/* Background Image */}
              <Image
                src="/hero2.jpg"
                alt="Hero Image 1"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-5xl font-bold mb-4">Welcome to Audio Store</h1>
                <p className="text-xl mb-8">Discover the best audio products</p>
                <Button
                  onClick={() => router.push("/shop")}
                  className="text-white bg-transparent border border-white font-bold py-2 px-4 rounded hover:bg-white hover:text-black transition"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </CarouselItem>

          {/* Carousel Item 2 */}
          <CarouselItem className="flex justify-center">
            <div className="rounded-2xl my-10 relative w-full h-[60vh] max-w-7xl">
              {/* Background Image */}
              <Image
                src="/hero3.jpg"
                alt="Hero Image 2"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-5xl font-bold mb-4">Welcome to Audio Store</h1>
                <p className="text-xl mb-8">Discover the best audio products</p>
                <Button
                  onClick={() => router.push("/shop")}
                  className="text-white bg-transparent border border-white font-bold py-2 px-4 rounded hover:bg-white hover:text-black transition"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          </CarouselItem>

          {/* Carousel Item 3 */}
          <CarouselItem className="flex justify-center">
            <div className="rounded-2xl my-10 relative w-full h-[60vh] max-w-7xl">
              {/* Background Image */}
              <Image
                src="/hero1.jpg"
                alt="Hero Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded-3xl"
              />
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h1 className="text-5xl font-bold mb-4">Welcome to Audio Store</h1>
                <p className="text-xl mb-8">Discover the best audio products</p>
                <Button
                  onClick={() => router.push("/shop")}
                  className="text-white bg-transparent border border-white font-bold py-2 px-4 rounded hover:bg-white hover:text-black transition"
                >
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
