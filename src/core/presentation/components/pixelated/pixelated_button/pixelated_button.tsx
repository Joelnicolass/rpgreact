import React from "react";

import styles from "./pixelated_button.module.css";
import clsx from "clsx";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  secondary?: boolean;
}

const PixelatedButton = ({ children, secondary = false }: Props) => {
  return (
    <div
      className={clsx(
        styles.pixel,
        secondary ? styles.secondary : styles.primary
      )}
    >
      {children}
    </div>
  );
};

export default PixelatedButton;
