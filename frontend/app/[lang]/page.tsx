import About from "@/components/About";
import GetInTouch from "@/components/GetInTouch";
import Hero from "@/components/Hero";
import Mahoyo from "@/components/Mahoyo";
import Press from "@/components/Press";
import ProductionFacts from "@/components/ProductionFacts";
import ScreeningInfo from "@/components/ScreeningInfo";
import StudyMaterial from "@/components/StudyMaterial";
import Trailer from "@/components/Trailer";
import { getHomePageContent } from "@/lib/sanity/queries";
import { getLocale } from "next-intl/server";

export default async function Home() {
  const locale = await getLocale();
  const data = await getHomePageContent(locale);
  return (
    <div className="flex min-h-screen justify-center">
      <main className="w-full flex flex-col items-start">
        <Hero description={data?.hero.description} />
        <About
          synopsis={data?.about.synopsis}
          fullSynopsis={data?.about.fullSynopsis}
        />
        <Trailer />
        <Mahoyo description={data?.mahoyo.description} />
        <ScreeningInfo />
        <GetInTouch />
        <StudyMaterial />
        <Press />
        <ProductionFacts />
      </main>
    </div>
  );
}
