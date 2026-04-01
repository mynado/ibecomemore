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
          "px-2 py-1 text-sm",
          locale === "sv"
            ? "bg-foreground text-background"
            : "bg-transparent text-foreground",
        )}
      >
        SV
      </button>
      <button
        onClick={() => handleLocaleChange("en")}
        className={clsx(
          "px-2 py-1 text-sm",
          locale === "en"
            ? "bg-foreground text-background"
            : "bg-transparent text-foreground",
        )}
      >
        EN
      </button>
    </div>
  );
}
