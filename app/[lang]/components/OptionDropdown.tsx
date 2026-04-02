"use client";

import clsx from "clsx";
import { useState } from "react";

type DropdownOption = {
  value: string;
  label: string;
  disabled?: boolean;
  hidden?: boolean;
};

type DropdownProps = {
  id: string;
  dropdownOptions?: DropdownOption[];
  labelText?: string;
  className?: string;
  error?: { message: string; isError: boolean };
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export default function OptionDropdown({
  id,
  dropdownOptions = [],
  labelText,
  className = "",
  error = { message: "", isError: false },
  ...rest
}: DropdownProps) {
  const [isDirty, setIsDirty] = useState(false);

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
      <select
        {...rest}
        id={id}
        onBlur={() => setIsDirty(true)}
        aria-invalid={error.isError}
        className={clsx(
          "border-1 border-petal/40 py-2 px-4 bg-petal/30 text-white text-sm invalid:border-sun w-full",
          showError ? "border-sun" : "border-petal/40",
          showValid ? "border-green-600" : "border-petal/40",
          className,
        )}
      >
        {dropdownOptions.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
            hidden={option.hidden}
          >
            {option.label}
          </option>
        ))}
      </select>
      {error.isError && isDirty && (
        <span className="text-sun text-xs">{error.message}</span>
      )}
    </div>
  );
}
