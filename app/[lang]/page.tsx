"use client";

import Hero from "./components/Hero";
import ScreeningInfo from "./components/ScreeningInfo";
// import StudyMaterial from "./components/StudyMaterial";
// import Press from "./components/Press";
import About from "./components/About";
import Trailer from "./components/Trailer";
import Mahoyo from "./components/Mahoyo";
import ProductionFacts from "./components/ProductionFacts";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center">
      <main className="w-full flex flex-col items-start">
        <Hero />
        <About />
        <Trailer />
        <Mahoyo />
        <ScreeningInfo />
        {/* <StudyMaterial /> */}
        {/* <Press /> */}
        <ProductionFacts />
      </main>
    </div>
  );
}
