"use client";

import { useState } from "react";
import { PiEyeDuotone, PiEyeClosedDuotone } from "react-icons/pi";

interface PasswordInputProps {
  placeholder: string;
  className?: string;
  onChange: (newval: string) => void;
}

export const PasswordInputBox: React.FC<PasswordInputProps> = ({
  placeholder,
  className = "",
  onChange,
}: PasswordInputProps) => {
  const [maskState, setMaskState] = useState<boolean>(true);

  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        className={`input !pr-16 overflow-clip ${className}`}
        type={maskState ? "password" : "text"}
        onChange={(e) => onChange(e.target.value)}
      />
      <div
        className="absolute right-0 top-0 h-full items-center flex px-4 cursor-pointer"
        onClick={() => setMaskState(!maskState)}
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
