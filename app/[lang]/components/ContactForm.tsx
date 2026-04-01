"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

const screeningContextOptions = [
  { value: "", label: "selectPlaceholder" },
  { value: "school", label: "selectOptionA" },
  { value: "workshop", label: "selectOptionB" },
  { value: "community", label: "selectOptionC" },
  { value: "festival", label: "selectOptionD" },
  { value: "other", label: "selectOptionE" },
];

type FormField = { value: string; isError: boolean };
type FormData = {
  context: FormField;
  name: FormField;
  email: FormField;
  message: FormField;
};

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  // TODO: Implement form submission logic
  const [formData, setFormData] = useState<FormData>({
    context: { value: "", isError: false },
    name: { value: "", isError: false },
    email: { value: "", isError: false },
    message: { value: "", isError: false },
  });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isError, setIsError] = useState(false);

  const onInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: {
        value: e.target.value,
        isError: !e.target.validity.valid,
      },
    }));
    setIsError(false);
  };
  const onOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      reason: { value: e.target.value, isError: !e.target.validity.valid },
    }));
    setIsError(false);
  };

  const onCloseSuccessMessage = () => {
    setShowSuccessMessage(false);
    setIsSuccess(false);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = Object.values(formData).every((field) => !field.isError);
    console.log("Form validation result:", isValid);
    if (!isValid) {
      setIsError(true);
      return;
    }

    setIsSending(true);
    setIsError(false);

    try {
      console.log("Attempting to send form data to /api/contact");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reason: formData.context.value,
          name: formData.name.value,
          email: formData.email.value,
          message: formData.message.value,
        }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setIsSuccess(true);
      setShowSuccessMessage(true);
      setIsError(false);
      setFormData({
        context: { value: "", isError: false },
        name: { value: "", isError: false },
        email: { value: "", isError: false },
        message: { value: "", isError: false },
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsError(true);
    } finally {
      console.log("Finished submission attempt");
      setIsSending(false);
    }
  };
  return (
    <form className="flex flex-col gap-2" onSubmit={onSubmit}>
      <label htmlFor="name" className="text-petal font-mono uppercase text-xs">
        {t("nameLabel")}
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name.value}
        onChange={onInputChange}
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
        value={formData.email.value}
        onChange={onInputChange}
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
        value={formData.context.value}
        onChange={onOptionChange}
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
        value={formData.message.value}
        onChange={onInputChange}
        className="border-1 border-petal mb-4 py-2 px-4 bg-petal/10 text-white text-sm h-32"
        required
      ></textarea>

      <button type="submit" className="uppercase font-mono bg-honey py-2 px-4">
        {t("submitButton")}
      </button>
    </form>
  );
}
