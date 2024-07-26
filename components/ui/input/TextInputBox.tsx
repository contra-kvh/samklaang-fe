'use client';

import React from 'react';
import { useState } from 'react';
import { PiCheckCircleDuotone, PiXCircleDuotone } from 'react-icons/pi';

interface TextInputProps {
  placeholder: string,
  className?: string; 
  onChange: (newval: string) => void;
  validator?: (value: string) => boolean;
}

export const TextInputBox: React.FC<TextInputProps> = ({placeholder, className = '', onChange, validator}) => {
  const [isValid, setIsvalid] = useState<boolean | undefined>(undefined);

  const handleChange = (value: string) => {
    onChange(value);
    if(validator !== undefined){
      setIsvalid(validator(value));
    }
  }

  return (
    <div className="relative">
      <input 
        placeholder={placeholder} 
        className={`input !pr-16 overflow-clip ${className}`} 
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="absolute right-0 top-0 h-full items-center flex px-4 cursor-pointer" >
        {isValid !== undefined && (
          isValid ? (
            <PiCheckCircleDuotone className="text-white text-lg" />
          ) : (
            <PiXCircleDuotone className="text-red text-lg" />
          )
        )}
      </div>
    </div>
  )
}
