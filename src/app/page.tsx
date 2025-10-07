"use client";

import Hero from "../components/Hero";
import Thesis from "../components/Thesis";
import CompareLab from "../components/CompareLab";
import Contact from "../components/Contact";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Thesis />
      <CompareLab />
      <Contact />
    </div>
  );
}
