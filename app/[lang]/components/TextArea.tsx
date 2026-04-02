"use client";

import { clsx } from "clsx";
import { useState } from "react";

type TextAreaProps = {
  id: string;
  labelText?: string;
  className?: string;
  error: { message: string; isError: boolean };
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea({
  id,
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
        htmlFor={id}
        className="text-white font-mono uppercase text-xs font-semibold"
      >
        {labelText}
      </label>
      <textarea
        {...rest}
        id={id}
        onBlur={handleBlur}
        aria-invalid={error.isError}
        className={clsx(
          "border-1 border-petal/40 py-2 px-4 bg-petal/30 text-white text-sm min-h-34",
          className,
          showError ? "border-sun" : "border-petal/40",
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
