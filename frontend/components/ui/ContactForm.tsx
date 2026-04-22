"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Input from "./Input";
import OptionDropdown from "./OptionDropdown";
import TextArea from "./TextArea";

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
  const [formData, setFormData] = useState<FormData>({
    context: { value: "", isError: false },
    name: { value: "", isError: false },
    email: { value: "", isError: false },
    message: { value: "", isError: false },
  });
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  // TODO: Add more specific validation error messages (e.g. invalid email format)
  // TODO: Consider using a form library like react-hook-form for better scalability and built-in validation handling

  const onFieldChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, validity } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: {
        value,
        isError: !validity.valid,
      },
    }));

    setIsError(false);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validated = {
      name: { ...formData.name, isError: !formData.name.value.trim() },
      email: {
        ...formData.email,
        isError: !formData.email.value.includes("@"),
      },
      context: { ...formData.context, isError: !formData.context.value },
      message: { ...formData.message, isError: !formData.message.value.trim() },
    };

    const isValid = Object.values(validated).every((f) => !f.isError);
    if (!isValid) {
      setFormData(validated);
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
          context: formData.context.value,
          name: formData.name.value,
          email: formData.email.value,
          message: formData.message.value,
        }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setIsSuccess(true);
      setIsError(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsError(true);
    } finally {
      console.log("Finished submission attempt");
      setIsSending(false);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
      <Input
        labelText={t("nameLabel")}
        name="name"
        id="name"
        value={formData.name.value}
        onChange={onFieldChange}
        min={1}
        required
        error={{
          isError: !isSuccess && formData.name.isError,
          message: "Name is required.",
        }}
      />
      <Input
        labelText={t("emailLabel")}
        name="email"
        id="email"
        type="email"
        value={formData.email.value}
        onChange={onFieldChange}
        required
        error={{
          isError: !isSuccess && formData.email.isError,
          message: "Valid email is required.",
        }}
      />
      <OptionDropdown
        labelText={t("selectLabel")}
        name="context"
        id="context"
        value={formData.context.value}
        onChange={onFieldChange}
        dropdownOptions={screeningContextOptions.map((option) => ({
          ...option,
          label: t(option.label),
        }))}
        error={{
          isError: !isSuccess && formData.context.isError,
          message: "Please select a screening context.",
        }}
      />
      <TextArea
        labelText={t("messageLabel")}
        name="message"
        id="message"
        value={formData.message.value}
        onChange={onFieldChange}
        error={{
          isError: !isSuccess && formData.message.isError,
          message: "Message is required.",
        }}
      />

      {isError && !isSuccess && (
        <p role="alert" className="text-sun text-sm">
          Please fix validation errors before submitting.
        </p>
      )}

      <button
        type="submit"
        className="uppercase font-mono bg-honey py-2 px-4 disabled:bg-honey/50 disabled:cursor-not-allowed"
        disabled={isSending || isSuccess}
      >
        {isSending
          ? t("submittingButton")
          : isSuccess
            ? t("submittedButton")
            : t("submitButton")}
      </button>
    </form>
  );
}
