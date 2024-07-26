import React from "react";

interface TextInputProps {
  placeholder: string;
  type?: "email" | "text";
  className?: string;
  value?: string;
  setValue?: (value: string) => void;
}

export const TextInputBox: React.FC<TextInputProps> = ({
  placeholder,
  type = "text",
  className = "",
  value,
  setValue,
}) => {
  return (
    <input
      placeholder={placeholder}
      className={`input ${className}`}
      type={type}
      value={value}
      onChange={setValue ? (e) => setValue(e.target.value) : undefined}
    />
  );
};
