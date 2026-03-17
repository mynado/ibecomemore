"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Image from "next/image";
import SectionLabel from "./components/SectionLabel";
import ProductionFacts from "./components/ProductionFacts";
import ScreeningInfo from "./components/ScreeningInfo";
import StudyMaterial from "./components/StudyMaterial";
import Press from "./components/Press";
import About from "./components/About";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex min-h-screen justify-center">
      <main className="w-full flex flex-col items-start">
        <Hero />
        <About />
        <Section id="trailer">
          <div className="w-full px-8 py-12 h-full flex flex-col gap-4 justify-start bg-ink">
            <SectionLabel label="Watch Trailer" color="petal" />
            <div className="w-full mx-auto relative h-0 pb-[56.25%]">
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
        <Section id="mahoyo">
          {/* TODO: Update this text */}
          <div className="px-8 py-12 w-full md:w-3/5 h-full flex flex-col gap-4 justify-start border-r-2 border-foreground">
            <SectionLabel label="Directors" />
            <h2 className="text-5xl font-extrabold mb-2 max-w-sm">
              Meet <span className="text-ember italic">Mahoyo</span>
            </h2>
            <p>
              MyNa Do (they/them) and Farah Yusuf (she/her) are childhood
              friends and the artistic duo behind Mahoyo — a creative platform
              where art and community building are inseparable. Through
              photography, DJing, styling, costume design, film, and grassroots
              organising, Mahoyo creates space for voices and stories that
              Swedish culture too often leaves out.
            </p>
            <p>
              Together they directed The Mahoyo Project: South Africa (2015),
              which won a SIMA Award, and co-directed Fuck Your Fusion (2020),
              their first fiction film. Beyond their shared work, MyNa has
              co-founded Congee and organised queer and BIPOC spaces through
              clubs and events, while Farah has continued directing
              independently, most recently Holding Light (2023), an artfilm
              centering the Black experience in Sweden. Both continue this work
              beyond Mahoyo — through independent projects, organising, and
              filmmaking.
            </p>
          </div>
          <div className="w-full md:w-2/5 h-full flex flex-col justify-start">
            <div className="relative border-b-2 border-foreground">
              <Image
                src="/myna-profile.webp"
                width={800}
                height={400}
                alt="MyNa Do"
                className="w-full max-h-[400px] object-cover"
              />
              <p className="absolute left-4 bottom-4 text-ember font-serif text-2xl font-bold">
                MyNa Do
              </p>
            </div>
            <div className="relative">
              <Image
                src="/farah_profile.webp"
                width={800}
                height={400}
                alt="Farah Yusuf"
                className="w-full max-h-[400px] object-cover"
              />
              <p className="absolute left-4 bottom-4 text-ember font-serif text-2xl font-bold">
                Farah Yusuf
              </p>
            </div>
          </div>
        </Section>
        <ScreeningInfo />
        <StudyMaterial />
        <Press />
        <ProductionFacts />
      </main>
    </div>
  );
}
