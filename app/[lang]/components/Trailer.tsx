import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import Section from "./Section";
import SectionLabel from "./SectionLabel";

export default function Trailer() {
  const t = useTranslations("Trailer");
  const [isIframeVisible, setIsIframeVisible] = useState(false);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isIframeVisible) return;
    const element = placeholderRef.current;
    if (!element) return;

    let timer: ReturnType<typeof setTimeout> | null = null;

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsIframeVisible(true);
            observer.disconnect();
          }
        },
        { rootMargin: "200px" },
      );
      observer.observe(element);
      return () => observer.disconnect();
    }

    timer = setTimeout(() => setIsIframeVisible(true), 0);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isIframeVisible]);

  const loadIframe = () => setIsIframeVisible(true);

  return (
    <Section id="trailer">
      <div className="w-full px-8 py-12 h-full flex flex-col gap-4 justify-start bg-ink">
        <SectionLabel label={t("label")} color="petal" />
        <div
          ref={placeholderRef}
          className="w-full mx-auto relative h-0 pb-[56.25%]"
        >
          {isIframeVisible ? (
            <iframe
              src="https://player.vimeo.com/video/1166689842?h=cc03a48e4c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              title="I become more with you - Trailer (2026)"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          ) : (
            <button
              onClick={loadIframe}
              className="absolute inset-0 flex items-center justify-center font-mono text-sm uppercase tracking-widest text-white bg-ink/75 hover:bg-ink/90 transition"
              aria-label="Load trailer"
            >
              {t("loadTrailer") || "Load trailer"}
            </button>
          )}
        </div>
      </div>
    </Section>
  );
}
