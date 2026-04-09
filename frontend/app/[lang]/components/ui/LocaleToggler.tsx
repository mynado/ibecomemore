"use client";

import clsx from "clsx";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LocaleToggler() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const handleLocaleChange = (newLocale: string) => {
    if (newLocale !== locale) {
      const segments = pathname.split("/");
      segments[1] = newLocale;
      const newPathname = segments.join("/");
      router.replace(newPathname);
    }
  };
  return (
    <div>
      <button
        onClick={() => handleLocaleChange("sv")}
        className={clsx(
          "px-2 py-1 text-sm cursor-pointer uppercase",
          locale === "sv"
            ? "bg-foreground text-background"
            : "bg-transparent text-foreground hover:text-ember transition-colors duration-200",
        )}
      >
        SV
      </button>
      <button
        onClick={() => handleLocaleChange("en")}
        className={clsx(
          "px-2 py-1 text-sm cursor-pointer uppercase",
          locale === "en"
            ? "bg-foreground text-background"
            : "bg-transparent text-foreground hover:text-ember transition-colors duration-200",
        )}
      >
        EN
      </button>
    </div>
  );
}
