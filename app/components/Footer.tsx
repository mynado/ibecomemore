"use client";

export default function Footer() {
  return (
    <div className="bg-ink w-full mx-auto px-8 py-12 md:flex gap-4 text-petal">
      <div className="w-1/3">
        <span className="font-serif font-bold block">
          I Become More With You
        </span>
        <span className="font-serif block italic">Jag blir mer med dig</span>
        <p className="mt-4">
          A documentary about art, identity, and resistance in Sweden.
        </p>
      </div>
      <div className="w-1/3">
        <div>Navigate</div>
        <ul>
          <li>About the Film</li>
          <li>Meet Mahoyo</li>
          <li>Request a Screening</li>
          <li>Study Material</li>
          <li>Press</li>
        </ul>
      </div>
      <div className="w-1/3">
        <div>Contact</div>
        <div>
          Contact Mónica Hernández Rejón +46 760 976 164 For screening requests,
          press inquiries, and study material questions. pramfilm.se ↗
        </div>
      </div>
    </div>
  );
}
