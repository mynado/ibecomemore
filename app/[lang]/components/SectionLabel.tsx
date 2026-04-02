const colorMap: Record<string, { text: string; bg: string }> = {
  bark: { text: "text-bark", bg: "bg-bark" },
  petal: { text: "text-petal", bg: "bg-petal" },
  white: { text: "text-white", bg: "bg-white" },
};

export default function SectionLabel({
  label,
  color,
}: {
  label: string;
  color?: string;
}) {
  const { text, bg } = color ? colorMap[color] : colorMap.bark;
  return (
    <div className="flex items-center justify-between gap-4 mb-8">
      <p
        className={`uppercase text-xs whitespace-nowrap font-mono w-fit ${text}`}
      >
        {label}
      </p>
      <div className={`h-[1px] w-full ${bg} my-4`}></div>
    </div>
  );
}
