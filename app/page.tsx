import Hero from "./sections/Hero";
import Categories from "./sections/Categories";
import Experience from "./sections/Experience";
import Customer from "./sections/Customer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Hero />
      <Experience />
      <Categories />
      <Customer />
    </main>
  );
}
