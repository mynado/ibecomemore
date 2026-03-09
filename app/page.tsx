"use client";
import { useState } from "react";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Image from "next/image";
import SectionLabel from "./components/SectionLabel";
import ProductionFacts from "./components/ProductionFacts";

const filmInfo = [
  { label: "Original Title", value: "Jag blir mer med dig" },
  { label: "Genre", value: "Documentary" },
  { label: "Capture and Final Format", value: "HD/2K" },
  { label: "Duration", value: "75 minutes" },
  { label: "Language", value: "Swedish, English, Vietnamese & Teochew" },
  { label: "Subtitles", value: "English, Swedish" },
  { label: "Production Company", value: "Pråmfilm AB" },
];

export default function Home() {
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);
  const onToggleSynopsis = () => setShowFullSynopsis((prev) => !prev);
  return (
    <div className="flex min-h-screen justify-center">
      <main className="w-full max-w-[1440px] flex flex-col items-start">
        <Hero />
        <Section>
          <div
            id="about"
            className="px-8 py-12 w-full md:w-2/5 h-full flex flex-col gap-4 justify-start bg-honey border-r-2 border-foreground"
          >
            <SectionLabel label="The Film" />
            <h2 className="text-5xl font-extrabold text-ember mb-2 max-w-sm">
              About the film
            </h2>
            <ul className="mt-4">
              {filmInfo.map((item) => (
                <li
                  key={item.label}
                  className="text-lg text-foreground text-sm flex items-center justify-between gap-2 border-t-1 border-foreground/50 py-4"
                >
                  {item.label}
                  <span className="font-semibold">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="px-8 py-12 w-full md:w-3/5 h-full flex flex-col gap-4 justify-start">
            <SectionLabel label="Synopsis" />
            <p className="text-lg">
              Childhood friends MyNa and Farah form the artistic duo Mahoyo.
              Through their art, they explore questions of identity and
              belonging within the highly segregated Swedish society. As we
              follow their journey, we get closer into the growth of far-right
              movements in Sweden, but also into the uprising of a generation of
              young Swedes creating political change.
            </p>
            {showFullSynopsis && (
              <p className="text-md mt-4">
                Childhood friends MyNa and Farah form the artistic duo Mahoyo, a
                creative platform where they work as DJs, stylists, costume
                designers, photographers, and filmmakers. MyNa was born in
                Sweden to a Vietnamese-Chinese family, while Farah was born in
                Somalia, spent part of her childhood in Kenya, and arrived in
                Sweden as a child refugee. MyNa is queer, and Farah is Muslim.
                Growing up together in Oskarshamn—a small town where their
                identities often made them stand out—their friendship became a
                refuge, a place of belonging in an environment that could feel
                isolating. As nearly the only non-white kids in their school,
                they bonded over their rich and intersecting cultural
                backgrounds. That connection became the foundation of Mahoyo,
                through which they explore identity, resistance, and the
                complexities of belonging in Sweden’s highly segregated society.
                In this film, we follow MyNa and Farah’s journey as they connect
                with artists in Vietnam and Kenya, tracing creative lineages
                that shape their work. Set against the backdrop of Sweden’s
                growing far-right movements, We witness the rise of a new
                generation of young Swedes using art and activism to create
                change.
              </p>
            )}
            <button
              className="border-b-1 border-ember text-ember w-fit mt-4 uppercase text-sm font-semibold hover:text-red-900 transition-colors duration-200"
              onClick={onToggleSynopsis}
            >
              {showFullSynopsis ? "Show less ↑" : " Read full synopsis ↓"}
            </button>
          </div>
        </Section>
        <Section>
          <div
            id="trailer"
            className="w-full px-8 py-12 h-full flex flex-col gap-4 justify-start bg-ink"
          >
            <SectionLabel label="Watch Trailer" color="petal" />
            <div className="w-full relative h-0 pb-[56.25%]">
              <iframe
                src="https://player.vimeo.com/video/1166689842?h=cc03a48e4c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                allowFullScreen
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
                title="I become more with you - Trailer (2026)"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </Section>
        <Section>
          <div
            id="mahoyo"
            className="px-8 py-12 w-full md:w-3/5 h-full flex flex-col gap-4 justify-start border-r-2 border-foreground"
          >
            <SectionLabel label="Directors" />
            <h2 className="text-5xl font-extrabold text-ember mb-2 max-w-sm">
              Meet Mahoyo
            </h2>
            <p>
              MyNa Do (they/them) is a co-founder of Mahoyo and has worked
              primarily as a photographer, graphic and costume designer, DJ, and
              event producer. MyNa got into the film world in 2013 with the SIMA
              Awards-winning film The Mahoyo Project: South Africa (2015), which
              they produced and directed with Farah Yusuf and Moira Ganley. In
              2020 MyNa co-directed Fuck Your Fusion, their first fiction film.
            </p>
            <p>
              Farah Yusuf (she/her) forms together with MyNa Do the artist duo
              and platform Mahoyo. She combines creativity with social issues
              she is passionate about, by producing projects within several
              cultural mediums such as photo, styling, and costume designer. In
              2013 Farah produced and directed her first film The Mahoyo
              Project: South Africa (2015) together with MyNa Do and Moira
              Ganley. In 2020 she co-directed Fuck Your Fusion, her first
              fiction film. In 2023 she directed Holding Light, an artfilm
              centering blackness and the black experience in Sweden.
            </p>
          </div>
          <div className="w-full md:w-2/5 h-full flex flex-col justify-start">
            <div className="relative border-b-2 border-foreground">
              <Image
                src="/myna-profile.webp"
                width={800}
                height={600}
                alt="MyNa Do"
              />
              <p className="absolute left-4 bottom-4 text-ember font-serif text-2xl font-bold">
                MyNa Do
              </p>
            </div>
            <div className="relative">
              <Image
                src="/farah_profile.webp"
                width={800}
                height={600}
                alt="Farah Yusuf"
              />
              <p className="absolute left-4 bottom-4 text-ember font-serif text-2xl font-bold">
                Farah Yusuf
              </p>
            </div>
          </div>
        </Section>
        <ProductionFacts />
      </main>
    </div>
  );
}
