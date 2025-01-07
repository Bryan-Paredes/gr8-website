import React from "react";

export default function Experience() {
  return (
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
  );
}
