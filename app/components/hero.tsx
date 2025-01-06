import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-light text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Elevate your space
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover our curated collection of minimalist furniture designed to
            transform your home.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Link href="/">
              <Button size="lg" className="rounded-full px-8">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
