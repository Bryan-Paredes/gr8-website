import { services } from "@/data/site";
import React from "react";

export default function Customer() {
  return (
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
  );
}
