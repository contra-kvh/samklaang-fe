import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  text: string;
  href?: string;
  type?: 'primary'|'secondary';
}

export const Button: React.FC<ButtonProps> = ({ text, href, type = 'primary' }) => {
  if (href) {
    return (
      <Link href={href} className={`button-${type}`}>
        {text}
        <span>{"->"}</span>
      </Link>
    );
  }
  return (
    <button className={`button-${type}`}>
      {text}
    </button>
  );
};
