"use client";

import Link from "next/link";
// import { ShoppingBag, Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { menuItems } from "@/data/site";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setActiveItem(window.location.pathname);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`hidden md:block fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-[#416681]/50 border-[#416681] shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-12">
              <Link href="/" className="text-xl font-light">
                <img src="/vercel.svg" alt="Logo" className="w-10 " />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-12">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`font-semibold transition-colors duration-300 ${
                    activeItem === item.href
                      ? isScrolled
                        ? "text-black"
                        : "text-primary"
                      : isScrolled
                      ? "text-white hover:text-blue-600"
                      : "text-white hover:text-blue-500"
                  } ${
                    item.id === "contacto"
                      ? isScrolled
                        ? "bg-transparent border-[3px] border-black px-4 py-2 rounded-lg hover:bg-black hover:text-white"
                        : "bg-transparent border-[3px] border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white"
                      : ""
                  }`}
                  onClick={() => setActiveItem(item.href)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* <div className="flex items-center space-x-6">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-gray-400"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="sr-only">Shopping cart</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-gray-400 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </div> */}
          </div>
        </div>
      </nav>
      <nav className="fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md bg-[#416681]/50 border-[#416681] py-2 rounded-lg md:hidden">
        <ul className="flex justify-around">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className={`flex flex-col items-center text-xs ${
                  activeItem === item.href ? "text-blue-500" : "text-white"
                }`}
                onClick={() => setActiveItem(item.href)}
              >
                <item.icon className="w-6 h-6 mb-1" />
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
