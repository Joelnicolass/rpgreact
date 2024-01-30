import React from "react";

import styles from "./pixelated_input.module.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const PixelatedInput = ({ ...props }: Props) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        {...props}
        style={{
          ...props.style,
        }}
      />
    </div>
  );
};

export default PixelatedInput;
