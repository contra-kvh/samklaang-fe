import React from "react";
import "./spinner.css";

interface SpinnerProps {
  size?: number;
}

const Spinner: React.FC<SpinnerProps> = ({ size = 40 }) => {
  const spinnerStyle = {
    "--spinner-size": `${size}px`,
  } as React.CSSProperties;

  return (
    <div className="lds-spinner" style={spinnerStyle}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
