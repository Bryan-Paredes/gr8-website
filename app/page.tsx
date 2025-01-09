import Hero from "./sections/Hero";
import Categories from "./sections/Categories";
import Customer from "./sections/Customer";
import { Footer } from "./sections/Footer";
import Metrics from "./sections/Metrics";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Hero />
      <Categories />
      <Customer />
      <Metrics />
      <Footer />
    </main>
  );
}
