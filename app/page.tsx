"use client";
import { useState } from "react";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Image from "next/image";
import SectionLabel from "./components/SectionLabel";
import ProductionFacts from "./components/ProductionFacts";
import ScreeningInfo from "./components/ScreeningInfo";

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
      <main className="w-full flex flex-col items-start">
        <Hero />
        <Section id="about">
          <div className="px-8 py-12 w-full md:w-2/5 h-full flex flex-col gap-4 justify-start bg-honey border-r-2 border-foreground">
            <SectionLabel label="The Film" />
            <h2 className="text-5xl font-extrabold mb-2 max-w-sm">
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
              className="border-b-1 border-ember text-ember w-fit mt-4 uppercase text-xs font-mono hover:text-red-900 transition-colors duration-200"
              onClick={onToggleSynopsis}
            >
              {showFullSynopsis ? "Show less ↑" : " Read full synopsis ↓"}
            </button>
          </div>
        </Section>
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
        <ProductionFacts />
      </main>
    </div>
  );
}
