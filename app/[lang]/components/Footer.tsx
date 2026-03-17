"use client";

export default function Footer() {
  return (
    <div className="bg-ink w-full mx-auto px-8 py-12 flex flex-col gap-12 md:flex-row md:gap-4 text-petal">
      <div className="md:w-1/3">
        <span className="font-serif font-bold block">
          I Become More With You
        </span>
        <span className="font-serif block italic">Jag blir mer med dig</span>
        <p className="mt-4 text-sm text-petal/60">
          A documentary about art, identity, and resistance in Sweden.
        </p>
      </div>
      <div className="md:w-1/3">
        <div className="uppercase text-xs text-petal/60 mb-2">Navigate</div>
        <ul className="text-sm flex flex-col gap-2 text-petal/80">
          <li>About the Film</li>
          <li>Meet Mahoyo</li>
          <li>Request a Screening</li>
          <li>Study Material</li>
          <li>Press</li>
        </ul>
      </div>
      <div className="md:w-1/3">
        <div className="uppercase text-xs text-petal/60 mb-2">Contact</div>
        <div className="text-sm text-petal/80 flex flex-col gap-2">
          <span>Mónica Hernández Rejón</span>
          <span>monica@pramfilm.se</span>
          <span>
            For screening requests, press inquiries, and study material
            questions.
          </span>
        </div>
      </div>
    </div>
  );
}
