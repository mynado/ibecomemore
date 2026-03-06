"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-between md:flex-row w-full border-b-2 border-foreground">
      <div className="p-4 w-full md:w-1/2 md:border-r-2 border-foreground h-full flex flex-col justify-center">
        <p className="uppercase text-sm mb-8">Documentary film</p>
        <h1 className="text-6xl font-extrabold text-primary font-serif text-primary mb-2 max-w-sm">
          I Become More With You
        </h1>
        <p className="text-2xl font-semibold italic font-serif">
          Jag blir mer med dig
        </p>
        <div className="h-1 w-20 bg-primary my-8"></div>
        <p className="text-lg text-foreground mt-4 max-w-2xl">
          Two lifelong friends fight an anti-racist battle in Sweden, building
          community through art as a boundless force for change—inside and out.
        </p>
      </div>
      <Image
        src="/poster_international.jpg"
        alt="I Become More With You - Poster"
        width={800}
        height={1200}
        className="w-full md:w-1/2 object-cover"
      />
    </div>
  );
}
