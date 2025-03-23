//@ts-nocheck
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CartItem from "../components/CartItem"; // Import the CartItem component

export default function Cart() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      image: "/images/product1.jpg",
      price: 500,
      quantity: 1,
    },
    {
      id: 2,
      name: "Product 2",
      image: "/images/product2.jpg",
      price: 300,
      quantity: 2,
    },
  ]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      router.push("/login"); // Redirect to login if not authenticated
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  if (!isAuthenticated) return <p>Loading...</p>;

  return (
    <div className="w-[70vw] p-[5vh] my-[5vh] rounded-lg bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="flex space-x-4">
      <div className="w-full max-w-3xl space-y-4">
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            onRemove={handleRemove}
          />
        ))}
        </div>
        <div className="w-[20vw] h-[30vh] border border-gray-200 rounded-lg my-4 p-4">
        <h1 className="text-xl text-center font-bold mb-6">Order Summary</h1>
        </div>
      </div>
    </div>
  );
}
