"use client";

import { useState } from "react";
import { PiEyeDuotone, PiEyeClosedDuotone } from "react-icons/pi";

interface PasswordInputProps {
  placeholder: string;
  className?: string;
  value?: string;
  setValue?: (value: string) => void;
}

export const PasswordInputBox: React.FC<PasswordInputProps> = ({
  placeholder,
  className = "",
  value,
  setValue,
}: PasswordInputProps) => {
  const [maskState, setMaskState] = useState<boolean>(true);

  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        className={`input !pr-16 overflow-clip ${className}`}
        type={maskState ? "password" : "text"}
        value={value}
        onChange={setValue ? (e) => setValue(e.target.value) : undefined}
      />
      <div
        className="absolute right-0 top-0 h-full items-center flex px-4 cursor-pointer"
        onClick={() => (maskState ? setMaskState(false) : setMaskState(true))}
      >
        {maskState ? (
          <PiEyeClosedDuotone className="text-lg" />
        ) : (
          <PiEyeDuotone className="text-lg" />
        )}
      </div>
    </div>
  );
};
