import { Button } from "@/components/ui/button";


const HeroSection = () => {
    return (
      <div className="py-10 flex justify-center relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('')" }}>
        <div className="absolute inset-0 bg-black opacity-100"></div>
        <div className="w-[80vw] h-[60vh] bg-blue-100 relative z-10 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Audio Store</h1>
          <p className="text-xl mb-8">Discover the best audio products</p>
          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Shop Now
          </Button>
        </div>
      </div>
    );
  };


  export default HeroSection;