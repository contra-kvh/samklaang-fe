import React from "react";
import Link from "next/link";
import { PiSpinnerGapDuotone } from "react-icons/pi";

interface ButtonProps {
  text: string;
  href?: string;
  type?: "primary" | "secondary";
  loading?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  href,
  type = "primary",
  loading = true,
  onClick,
}) => {
  if (href) {
    return (
      <Link href={href} className={`button-${type}`}>
        {text}
        <span>{"->"}</span>
      </Link>
    );
  }
  return (
    <button className={`group relative button-${type} ${loading?"loading":""}`} onClick={onClick}>
      <span className={`group-[.loading]:invisible`}>{text}</span>
      <div className={`hidden group-[.loading]:flex left-0 top-0 absolute w-full h-full flex justify-center items-center`}>
        <PiSpinnerGapDuotone className="flex absolute animate-spin" />
      </div>
    </button>
  );
};
