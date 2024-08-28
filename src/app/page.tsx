"use client";

import React from "react";
import Hero from "./components/Hero/Hero";
import Downloads from "./components/Downloads/Downloads";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-x-hidden">
      <Hero />
      <Features />
      <Downloads />
      <Footer />
    </main>
  );
}
