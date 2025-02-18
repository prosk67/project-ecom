import { Button } from "@/components/ui/button";


const HeroSection = () => {
    return (
      <div className="rounded-2xl my-10 relative w-[80vw] h-[60vh]">
    
        <div className="rounded-3xl w-[80vw] h-[60vh] bg-black relative z-1 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Audio Store</h1>
          <p className="text-xl mb-8">Discover the best audio products</p>
          <Button className="bg-blue-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded">
            Shop Now
          </Button>
        </div>
      </div>
    );
  };


  export default HeroSection;