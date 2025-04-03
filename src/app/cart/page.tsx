//@ts-nocheck
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CartItem from "../components/CartItem"; // Import the CartItem component
import { Button } from "@/components/ui/button";
export default function Cart() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Initialize cartItems state

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      router.push("/login"); // Redirect to login if not authenticated
    } else {
      setIsAuthenticated(true);
    }

    // Fetch cart items from the API
    const fetchCartItems = async () => {
      try {
        const response = await fetch("/api/cart/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });
        const data = await response.json();
        setCartItems(data.cartItems); // Set the cart items in state
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    }

    fetchCartItems(); // Call the function to fetch cart items
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
    <div className="w-[70vw] p-[5vh] my-[5vh] rounded-lg bg-white h-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="flex space-x-4">
        <div className="w-full max-w-3xl space-y-4">
          <div>{cartItems}</div>
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
        <div className="w-[20vw] border border-gray-200 rounded-lg my-4 p-4">
          <h1 className="text-xl text-center font-bold mb-6">Order Summary</h1>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="border-b py-2">Item</th>
                <th className="border-b py-2 text-center">Qty</th>
                <th className="border-b py-2 text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td className="py-2">{item.name}</td>
                  <td className="py-2 text-center">{item.quantity}</td>
                  <td className="py-2 text-right">BDT {item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="border-t py-2 font-bold">Total</td>
                <td className="border-t py-2 text-center font-bold">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                </td>
                <td className="border-t py-2 text-right font-bold">
                  BDT {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                </td>
              </tr>
            </tfoot>
          </table>
          <Button className="w-full mt-2 h-[4vh]"> Checkout</Button>
        </div>
      </div>
    </div>
  );
}
