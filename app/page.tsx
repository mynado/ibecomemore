export default function Home() {
  return (
    <div className="flex min-h-screen justify-center pt-10">
      <main className="w-full max-w-5xl px-4 flex flex-col items-start gap-8">
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
        <p className="max-w-2xl font-body text-2xl leading-relaxed mx-auto">
          Two lifelong friends fight an anti-racist battle in Sweden, building
          community through art as a boundless force for change—inside and out.
        </p>
      </main>
    </div>
  );
}
