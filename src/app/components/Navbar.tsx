"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in (e.g., by checking localStorage or a global state)
    const userId = localStorage.getItem("userId");
    // setIsLoggedIn(!!userId);
    setIsLoggedIn(true);
  }, []);
  return (
    <div className="w-full bg-white p-5 px-40 h-16">
      
      <div className="flex justify-between items-center align-center h-full">
        <div>
          <h1>Audio Store</h1>
        </div>
        <NavigationMenu>
          <NavigationMenuList>
          <NavigationMenuItem>
          <Link href="/dashboard" legacyBehavior passHref>
            <NavigationMenuLink className="text-lg font-semibold">
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/shop" passHref>
              
              
                <NavigationMenuTrigger className="text-lg">Shop</NavigationMenuTrigger>
              </Link>
              <NavigationMenuContent className="h-96">
                <NavigationMenuLink >
                <div className="z-20 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              
                </div>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-lg">Contact</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="grid grid-cols-2 gap-4">

          {isLoggedIn ? (
            <>
              <Button>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="outline" onClick={() => {
                localStorage.removeItem("userId");
                setIsLoggedIn(false);
              }}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button>
                <Link href="/login">Login</Link>
              </Button>
              <Button variant="outline">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
  
        </div>
      </div>



    </div>
  );
};

export default Navbar;
