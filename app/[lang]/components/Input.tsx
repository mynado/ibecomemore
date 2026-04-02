"use client";

import clsx from "clsx";
import { useState } from "react";

type InputProps = {
  id: string;
  labelText?: string;
  className?: string;
  error?: { message: string; isError: boolean };
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  id,
  labelText,
  className = "",
  error = { message: "", isError: false },
  ...rest
}: InputProps) {
  const [isDirty, setIsDirty] = useState(false);
  const showError = isDirty && error.isError;
  const showValid = isDirty && !error.isError && rest.value;
  return (
    <div className="w-full flex flex-col gap-2">
      <label htmlFor={id} className="text-petal font-mono uppercase text-xs">
        {labelText}
      </label>
      <input
        {...rest}
        id={id}
        onBlur={() => setIsDirty(true)}
        aria-invalid={error.isError}
        className={clsx(
          "border-1 border-petal/40 py-2 px-4 bg-petal/10 text-white text-sm",
          className,
          showError ? "border-sun" : "border-petal/40",
          showValid ? "border-green-600" : "border-petal/40",
        )}
        required
      />
      {error.isError && isDirty && (
        <span className="text-sun text-xs">{error.message}</span>
      )}
    </div>
  );
}
