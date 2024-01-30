import React from "react";

type Sizes = "sm" | "md" | "lg";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  max: number;
  current: number;
  color: string;
  name?: string;
}

const PixelatedBar = ({ max, current, color, name, ...props }: Props) => {
  const percentage = (current / max) * 100;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "30px",
        display: "grid",
        gridTemplateColumns: `repeat(${max}, 1fr)`,
        border: "4px solid white",
        transition: "all 0.5s ease",
        ...props.style,
      }}
    >
      <div
        style={{
          gridColumn: `span ${current}`,
          backgroundColor: color,
        }}
      ></div>
      {current < max && (
        <div
          style={{
            gridColumn: `span ${max - current}`,
            backgroundColor: "red",
          }}
        ></div>
      )}

      <p
        style={{
          padding: "0 20px",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        {name} {current}/{max} ({percentage}%)
      </p>
    </div>
  );
};

export default PixelatedBar;
