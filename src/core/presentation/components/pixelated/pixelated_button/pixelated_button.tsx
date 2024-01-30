import React from "react";

import styles from "./pixelated_button.module.css";
import clsx from "clsx";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | React.ReactNode[];
  secondary?: boolean;
  disabled?: boolean;
}

const PixelatedButton = ({
  children,
  secondary = false,
  disabled = false,
  ...props
}: Props) => {
  return (
    <button
      className={clsx(
        styles.pixel,
        secondary ? styles.secondary : styles.primary
      )}
      disabled={disabled}
      style={{
        cursor: disabled ? "not-allowed" : "pointer",
        ...props.style,
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default PixelatedButton;
