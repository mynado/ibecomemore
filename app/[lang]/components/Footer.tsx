"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("Footer");
  return (
    <div className="bg-ink w-full mx-auto px-8 py-12 flex flex-col gap-12 md:flex-row md:gap-4 text-petal">
      <div className="md:w-1/3">
        <span className="font-serif font-bold block">{t("filmTitle")}</span>
        <span className="font-serif block italic">{t("subtitle")}</span>
        <p className="mt-4 text-sm text-petal/60">{t("description")}</p>
      </div>
      <div className="md:w-1/3">
        <div className="uppercase text-xs text-petal/60 mb-2">
          {t("navLabel")}
        </div>
        <ul className="text-sm flex flex-col gap-2 text-petal/80">
          <li>
            <Link href="#about">{t("navAbout")}</Link>
          </li>
          <li>
            <Link href="#directors">{t("navDirectors")}</Link>
          </li>
          <li>
            <Link href="#screening">{t("navScreening")}</Link>
          </li>
          <li>
            <Link href="#study">{t("navStudy")}</Link>
          </li>
          <li>
            <Link href="#press">{t("navPress")}</Link>
          </li>
        </ul>
      </div>
      <div className="md:w-1/3">
        <div className="uppercase text-xs text-petal/60 mb-2">
          {t("contactLabel")}
        </div>
        <div className="text-sm text-petal/80 flex flex-col gap-2">
          <span>{t("contactPerson")}</span>
          <span>{t("contactEmail")}</span>
          <span>{t("contactDescription")}</span>
        </div>
      </div>
    </div>
  );
}
