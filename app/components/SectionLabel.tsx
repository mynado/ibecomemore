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
        className={`uppercase text-xs whitespace-nowrap font-mono w-fit text-${color || "bark"}`}
      >
        {label}
      </p>
      <div className={`h-[1px] w-full bg-${color || "bark"} my-4`}></div>
    </div>
  );
}
