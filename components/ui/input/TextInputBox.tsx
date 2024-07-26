import React from 'react';

interface TextInputProps {
  placeholder: string,
  type?: 'email' | 'text';
  className?: string; 
}

export const TextInputBox: React.FC<TextInputProps> = ({placeholder, type = 'text', className = ''}) => {
  return (
    <input placeholder={placeholder} className={`input ${className}`} type={type} />
  );
}
