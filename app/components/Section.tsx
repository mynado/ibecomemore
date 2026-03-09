"use client";

export default function Section({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className="flex flex-col items-center justify-between md:flex-row w-full border-b-2 border-foreground"
    >
      {children}
    </section>
  );
}
