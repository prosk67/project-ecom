"use client";
import Link from "next/link";
import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { usePathname } from "next/navigation";
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
import { Icon } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in (e.g., by checking localStorage or a global state)

    const userId = localStorage.getItem("userId");
    setIsLoggedIn(!!userId);

    // setIsLoggedIn(true);
  }, [pathname]);

  return (
    <div className="w-full bg-white p-5 px-40 h-16">
      <div className="flex justify-between items-center align-center h-full">
        <div className="flex items-center gap-2">
        <Image
            src="/logo.png" // Replace with the actual path to the avatar image
            alt="Profile Avatar"
            className="h-8 w-8"
            width={32}
            height={32}
                      
        />
        <h1 className="font-extrabold text-xl">GROOVE</h1>  
        </div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/shop" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Shop
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className=" flex gap-4">
          {isLoggedIn ? (
            
              <div className="flex items-center gap-4">
                <Link href="/cart">
                  <ShoppingCart className="w-5 h-5" /> {/* Cart icon */}
                </Link>
                <Link href="/profile">
                  <div className="object-cover w-8 h-8 rounded-full overflow-hidden">

                    <Image
                      src="/avatar.jpg" // Replace with the actual path to the avatar image
                      alt="Profile Avatar"
                      className="h-8 w-8"
                      width={32}
                      height={32}
                      
                    />
                  </div>
                </Link>
                <Button
                  variant="outline"
                  onClick={() => {
                    localStorage.removeItem("userId");
                    setIsLoggedIn(false);
                  }}
                >
                  Logout
                </Button>
              </div>
            
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
