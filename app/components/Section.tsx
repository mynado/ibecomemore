"use client";

export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-center justify-between md:flex-row w-full border-b-2 border-foreground">
      {children}
    </section>
  );
}
