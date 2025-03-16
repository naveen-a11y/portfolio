/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm Naveen Rawat
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-8">
          A Frontend Developer building amazing web experiences
        </p>
        <Link
          href="#projects"
          className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
        >
          View My Work
        </Link>
      </div>
    </section>
  );
};

export default Hero;
