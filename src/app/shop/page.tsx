"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import WorkInProgress from "../components/WorkInProgress";
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

  if (!isAuthenticated) return <p>Loading...</p>;

  return (
    
      <WorkInProgress/>
     
  );
}
