"use client";

import { useState } from "react";
import {
  PiEyeDuotone,
  PiXCircleDuotone,
  PiEyeClosedDuotone,
  PiCheckCircleDuotone,
} from "react-icons/pi";

interface PasswordInputProps {
  placeholder: string;
  className?: string;
  validator?: (value: string) => boolean;
  onChange: (newval: string) => void;
}

export const PasswordInputBox: React.FC<PasswordInputProps> = ({
  placeholder,
  className = "",
  validator,
  onChange,
}: PasswordInputProps) => {
  const [maskState, setMaskState] = useState<boolean>(true);
  const [isValid, setIsValid] = useState<boolean | undefined>(undefined);

  // regex for password validation 8 min length

  const handleChange = (value: string) => {
    onChange(value);
    if (validator !== undefined) {
      setIsValid(validator(value));
    }
  };

  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        className={`input !pr-16 overflow-clip ${className}`}
        type={maskState ? "password" : "text"}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="absolute right-12 top-0 h-full items-center flex px-4 cursor-pointer">
        {isValid !== undefined && !isValid && (
          <PiXCircleDuotone className="text-red text-lg" />
        )}
      </div>
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
