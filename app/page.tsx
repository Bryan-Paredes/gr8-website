import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Clock, CreditCard, HeartHandshake } from "lucide-react";

const solutions = [
  {
    title: "Concept Collection",
    image: "/solutions/1.jpg",
    link: "/collection/concept",
  },
  {
    title: "Modern Collection",
    image: "/solutions/2.jpg",
    link: "/collection/modern",
  },
  {
    title: "Classic Collection",
    image: "/solutions/3.jpg",
    link: "/collection/classic",
  },
  {
    title: "Luxury Collection",
    image: "/solutions/4.jpg",
    link: "/collection/luxury",
  },
];

const services = [
  {
    icon: Shield,
    title: "Full Service",
    description:
      "We provide complete interior design solutions from concept to execution.",
  },
  {
    icon: Clock,
    title: "On-time Delivery",
    description:
      "Our projects are delivered on schedule without compromising quality.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description:
      "Flexible payment options to suit your budget and requirements.",
  },
  {
    icon: HeartHandshake,
    title: "Warranty",
    description: "Extended warranty coverage for your peace of mind.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/hero.webp"
            alt="Modern kitchen interior"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              Design Your Kitchen with the Experts
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Eco-friendly Design & Production
            </p>
            <Button
              size="lg"
              className="rounded-none bg-[#C4A035] hover:bg-[#B39030] text-white"
            >
              GET STARTED NOW
            </Button>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#C4A035] text-7xl font-light">25</span>
              <p className="text-gray-400 text-xl mt-2">
                Years
                <br />
                Experience
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-light mb-6">
                Creative solutions
                <br />
                by professional designers
              </h2>
              <p className="text-gray-400">
                Our kitchen designs combine functionality with aesthetic
                excellence, creating spaces that inspire and perform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-16 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                href={solution.link}
                className="group relative overflow-hidden"
              >
                <div className="aspect-[3/4]">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-xl font-light">{solution.title}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Satisfaction */}
      <div className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light text-center mb-16">
            We work to an extremely high
            <br />
            standard of customer satisfaction
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {services.map((service) => (
              <div key={service.title} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C4A035]/10 mb-6">
                  <service.icon className="w-8 h-8 text-[#C4A035]" />
                </div>
                <h3 className="text-lg font-light mb-3">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
