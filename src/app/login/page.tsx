//ts-nocheck
"use client";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("userId", data.userId);
      // window.location.reload();
      
      router.push("/dashboard");
      
      
      
    } else {
      setError(data.message);
    }
  }
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="w-[50vh] h-auto p-8 bg-white rounded-2xl shadow-lg">
        <h1 className="text-center text-3xl font-bold mb-6">Login</h1>
        <form className="space-y-4" onSubmit={handleSubmit} >
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot your password?
              </a>
            </div>
          </div>
          <div className="flex justify-between">
            <Button
            
              type="submit"
              className=""
              
            >
              Sign in
            </Button>
            <Button className= 'hover:bg-slate-900 hover:text-white' variant='outline'
              type="submit"
              
            >
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
