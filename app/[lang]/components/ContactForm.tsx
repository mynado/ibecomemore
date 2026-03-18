"use client";
import { useTranslations } from "next-intl";

const screeningContextOptions = [
  { value: "", label: "selectPlaceholder" },
  { value: "school", label: "selectOptionA" },
  { value: "workshop", label: "selectOptionB" },
  { value: "community", label: "selectOptionC" },
  { value: "festival", label: "selectOptionD" },
  { value: "other", label: "selectOptionE" },
];

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  // TODO: Implement form submission logic
  return (
    <form className="flex flex-col gap-2">
      <label htmlFor="name" className="text-petal font-mono uppercase text-xs">
        {t("nameLabel")}
      </label>
      <input
        type="text"
        id="name"
        name="name"
        className="border-1 border-petal mb-4 py-2 px-4 bg-petal/10"
        required
      />

      <label htmlFor="email" className="text-petal font-mono uppercase text-xs">
        {t("emailLabel")}
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="border-1 border-petal mb-4 py-2 px-4 bg-petal/10"
        required
      />

      <label
        htmlFor="screening-context"
        className="text-petal font-mono uppercase text-xs"
      >
        {t("selectLabel")}
      </label>
      <select
        name="screening-context"
        id="screening-context"
        className="border-1 border-petal mb-4 py-2 px-4 bg-petal/10 text-white text-sm"
      >
        {screeningContextOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {t(option.label)}
          </option>
        ))}
      </select>

      <label
        htmlFor="message"
        className="text-petal font-mono uppercase text-xs"
      >
        {t("messageLabel")}
      </label>
      <textarea
        id="message"
        name="message"
        className="border-1 border-petal mb-4 py-2 px-4 bg-petal/10 text-white text-sm h-32"
        required
      ></textarea>

      <button type="submit" className="uppercase font-mono bg-honey py-2 px-4">
        {t("submitButton")}
      </button>
    </form>
  );
}
