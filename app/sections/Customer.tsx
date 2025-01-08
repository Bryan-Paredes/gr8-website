import { services } from "@/data/site";
import React from "react";

export default function Customer() {
  return (
    <div className="py-11 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-16 uppercase text-white">
          Estandares de Cálidad
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white backdrop-filter backdrop-blur-xl bg-opacity-5 border-[1.5px] border-white px-4 py-8 rounded-lg drop-shadow-xl"
            >
              <div className="inline-flex items-center justify-center w-20 h-16  p-3 mb-6">
                <service.icon size={60} color="white" />
              </div>
              <h3 className="text-lg mb-3 text-primary font-bold">
                {service.title}
              </h3>
              <p className="text-sm text-center text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
