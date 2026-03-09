"use client";

import Image from "next/image";
import Section from "./Section";

export default function Hero() {
  return (
    <Section>
      <div className="p-4 w-full md:w-1/2 md:border-r-2 border-foreground h-full flex flex-col justify-center">
        <p className="uppercase font-mono text-sm text-bark mb-8">
          Documentary film
        </p>
        <h1 className="text-6xl font-extrabold text-ember font-serif text-ember mb-2 max-w-sm">
          I Become More With You
        </h1>
        <p className="text-2xl font-semibold italic font-serif">
          Jag blir mer med dig
        </p>
        <div className="h-1 w-20 bg-ember my-8"></div>
        <p className="text-lg text-foreground mt-4 max-w-2xl">
          Two lifelong friends fight an anti-racist battle in Sweden, building
          community through art as a boundless force for change—inside and out.
        </p>
      </div>
      <Image
        src="/still-01.webp"
        alt="I Become More With You - Poster"
        width={800}
        height={1200}
        className="w-full md:w-1/2 object-cover"
      />
    </Section>
  );
}
