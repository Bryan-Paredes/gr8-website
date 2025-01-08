"use client";

import Link from "next/link";
import { menuItems } from "@/data/site";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
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
        <div className="max-w-[1400px] mx-auto px-6 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-12">
              <Link href="/" className="text-xl font-light">
                <img src="/logo.svg" alt="Logo" className="w-20 h-16" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`font-semibold transition-colors duration-300 py-1 ${
                    pathname === item.href
                      ? isScrolled
                        ? "text-white border-b-2 border-white"
                        : "text-gray-400 border-b-2 border-gray-300"
                      : isScrolled
                      ? "text-gray-400 hover:text-gray-500"
                      : "text-white hover:text-gray-500"
                  } ${
                    item.id === "contacto"
                      ? isScrolled
                        ? "text-white bg-transparent border-[2px] px-6 py-1 rounded-lg hover:bg-gray-100 hover:border-gray-300 transition-colors"
                        : "text-white bg-transparent border-[2px] px-6 py-1 rounded-lg hover:text-white hover:bg-primary hover:border-primary  transition-colors"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
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
                  pathname === item.href ? "text-blue-500" : "text-white"
                }`}
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
