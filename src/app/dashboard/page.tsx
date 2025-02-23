"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "../components/HeroSection";
import BrandLogos from "../components/BrandLogos";
import Featured from "../components/Featured";
import CTA from "../components/CTA";
export default function Dashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    
    if (!userId) {
      setIsAuthenticated(false);
      
    } else {
      
      setIsAuthenticated(true);
      
      
    }
    
  }, []);
  
  // 
  return (
    
      <>
      <HeroSection />
      
      <BrandLogos />

      <Featured/>

      <CTA/>
      </>
     
  );
}
