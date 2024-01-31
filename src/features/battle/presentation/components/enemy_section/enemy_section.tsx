import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const EnemySection = ({ children }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        textWrap: "pretty",
        gap: "20px",
      }}
    >
      {children}
    </div>
  );
};

export default EnemySection;
