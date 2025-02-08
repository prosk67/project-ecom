"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      router.push("/login");
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) return <p>Loading...</p>;

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
      <button
        onClick={() => {
          localStorage.removeItem("userId");
          router.push("/login");
        }}
        className="mt-4 bg-red-500 text-white p-2 rounded-md"
      >
        Logout
      </button>
    </div>
  );
}
