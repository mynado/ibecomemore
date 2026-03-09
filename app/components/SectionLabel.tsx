"use client";

export default function SectionLabel({
  label,
  color,
}: {
  label: string;
  color?: string;
}) {
  console.log("color", color, "label", label);
  return (
    <div className="flex items-center justify-between gap-4 mb-8">
      <p
        className={`uppercase text-sm whitespace-nowrap font-mono w-fit text-${color || "bark"}`}
      >
        {label}
      </p>
      <div className={`h-[1px] w-full bg-${color || "bark"} my-4`}></div>
    </div>
  );
}
