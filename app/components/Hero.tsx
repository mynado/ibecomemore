"use client";

import Image from "next/image";
import Section from "./Section";
import Link from "next/dist/client/link";

export default function Hero() {
  return (
    <Section className="mt-14">
      <div className="p-4 w-full md:w-1/2 md:border-r-2 border-foreground h-full flex flex-col justify-center">
        {/* <p className="uppercase font-mono text-sm text-bark mb-8">
          Documentary film
        </p>
        <h1 className="text-6xl font-extrabold font-serif mb-2 max-w-sm">
          I Become More With You
        </h1>
        <p className="text-2xl font-semibold italic text-bark font-serif">
          Jag blir mer med dig
        </p>
        <div className="h-1 w-20 bg-ember my-8"></div>
        <p className="text-lg text-foreground mt-4 max-w-2xl mb-8">
          Two lifelong friends fight an anti-racist battle in Sweden, building
          community through art as a boundless force for change—inside and out.
        </p>
        <Link
          href="#screening"
          className="bg-ember text-white font-mono text-xs w-fit uppercase px-8 py-4 border-2 border-ember hover:bg-transparent hover:text-ember transition-colors"
        >
          → Request a Screening
        </Link> */}
        <p className="font-mono text-xs tracking-widest uppercase text-bark mb-4">
          Documentary film · 2026
        </p>

        <div className="flex flex-col gap-8">
          <p className="text-xl font-light leading-relaxed max-w-[38ch] mb-4">
            Two lifelong friends fight an anti-racist battle in Sweden, building
            community through art as a boundless force for change—inside and
            out.
          </p>
          <Link
            href="#screening"
            className="bg-ember text-white font-mono text-xs tracking-widest uppercase px-8 py-4 border-2 border-ember hover:bg-transparent hover:text-ember transition-colors self-start"
          >
            → Request a Screening
          </Link>
        </div>

        <div className="font-mono text-xs tracking-widest uppercase text-bark mt-4">
          Pråmfilm · Sweden
        </div>
      </div>
      <Image
        src="/poster_international.jpg"
        alt="I Become More With You - Poster"
        width={800}
        height={1200}
        className="w-full md:w-1/2 object-cover"
      />
    </Section>
  );
}

// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative h-screen w-full min-h-[600px] border-b-2 border-foreground overflow-hidden">
//       <Image
//         src="/poster_international.jpg"
//         alt="I Become More With You — film poster"
//         fill
//         sizes="100vw"
//         priority
//         className="object-contain"
//       />
//       <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent" />
//       <div className="absolute bottom-14 left-10 right-10 flex items-end justify-between flex-wrap gap-6">
//         <p className="text-lg font-light text-white max-w-[42ch] leading-relaxed drop-shadow">
//           Two lifelong friends fight an anti-racist battle in Sweden, building
//           community through art as a boundless force for change—inside and out.
//         </p>
//         <Link
//           href="#screening"
//           className="bg-ember text-white font-mono text-xs tracking-widest uppercase px-8 py-4 border-2 border-ember hover:bg-transparent hover:text-ember transition-colors"
//         >
//           → Request a Screening
//         </Link>
//       </div>
//       <div className="absolute bottom-8 right-10 bg-sun text-foreground font-mono text-xs tracking-widest uppercase px-3 py-2">
//         Documentary · 75 min · 2026
//       </div>
//     </section>
//   );
// }
