import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center">
      <main className="w-full max-w-[1440px] flex flex-col items-start gap-8">
        <Hero />
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
      </main>
    </div>
  );
}
