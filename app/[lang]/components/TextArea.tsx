"use client";

import { clsx } from "clsx";
import { useState } from "react";

type TextAreaProps = {
  labelText?: string;
  className?: string;
  error: { message: string; isError: boolean };
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea({
  labelText = "",
  className = "",
  error = { message: "", isError: false },
  ...rest
}: TextAreaProps) {
  const [isDirty, setIsDirty] = useState(false);
  const handleBlur = () => {
    setIsDirty(true);
  };
  const showError = isDirty && error.isError;
  const showValid = isDirty && !error.isError && rest.value;
  return (
    <div className="w-full flex flex-col gap-2">
      <label
        htmlFor="message"
        className="text-petal font-mono uppercase text-xs"
      >
        {labelText}
      </label>
      <textarea
        {...rest}
        onBlur={handleBlur}
        aria-invalid={error.isError}
        className={clsx(
          "border-1 border-petal/40 py-2 px-4 bg-petal/10 text-white text-sm invalid:border-sun min-h-34",
          className,
          showError ? "border-sun" : "",
          showValid ? "border-green-600" : "border-petal/40",
        )}
        required
      ></textarea>
      {error.isError && isDirty && (
        <span className="text-sun text-xs">{error.message}</span>
      )}
    </div>
  );
}
