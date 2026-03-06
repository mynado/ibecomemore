"use client";

export default function SectionLabel({
  label,
  color,
}: {
  label: string;
  color?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 mb-8">
      <p
        className={`uppercase text-sm whitespace-nowrap w-fit text-${color || "foreground"}`}
      >
        {label}
      </p>
      <div
        className={`h-[1px] w-full bg-${color || "foreground/50"} my-4`}
      ></div>
    </div>
  );
}
