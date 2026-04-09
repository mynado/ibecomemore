import React from "react";

const headingsStyle: { [key: string]: string } = {
  h1: "text-6xl font-extrabold mb-4",
  h2: "text-5xl font-extrabold text-ink mb-3",
  h3: "uppercase font-mono text-bark mb-2",
};

export default function Heading({
  children,
  Tag = "h2",
  style = "h2",
  className = "",
}: {
  children: React.ReactNode;
  Tag?: React.ElementType;
  style?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const TagElement = Tag;
  const headingClass = headingsStyle[style] || headingsStyle.h2;
  return (
    <TagElement className={`${headingClass} ${className}`}>
      {children}
    </TagElement>
  );
}
