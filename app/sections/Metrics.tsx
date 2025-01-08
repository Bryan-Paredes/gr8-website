"use client";

import AnimatedCounter from "@/components/metrcis-count";
import React from "react";

export default function Metrics() {
  return (
    <main className="relative">
      <div
        className="absolute inset-0 bg-back-category bg-cover bg-no-repeat bg-center backdrop-blur-md"
        style={{
          maskImage: "linear-gradient(black 80%, transparent 100%)",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative h-full py-5 sm:py-28 flex flex-col sm:flex-row gap-5 items-center justify-evenly">
        <div className="text-white flex flex-col items-center justify-center gap-4">
          <AnimatedCounter
            end={5}
            duration={1500}
            label="Años de Experiencia"
            sufix=""
          />
        </div>
        <div className="text-white flex flex-col justify-center items-center gap-4">
          <AnimatedCounter
            end={150}
            duration={1500}
            label="Proyectos Terminados"
            sufix="+"
          />
        </div>
        <div className="text-white flex flex-col justify-center items-center gap-4">
          <AnimatedCounter
            end={100}
            duration={1500}
            label="Clientes Satisfechos"
            sufix="+"
          />
        </div>
      </div>
    </main>
  );
}
