"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "../components/HeroSection";
import BrandLogos from "../components/BrandLogos";
import Featured from "../components/Featured";
export default function Dashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      // router.push("/login");
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) return (<HeroSection/>);

  return (
    
      <>
      <HeroSection />
      
      <BrandLogos />

      <Featured/>
      </>
     
  );
}
