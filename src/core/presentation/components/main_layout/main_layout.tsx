import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  style?: React.CSSProperties;
};

const MainLayout = ({ children, style }: Props) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "100dvh",
        width: "100dvw",
        border: "4px solid white",
        borderRadius: "16px",
        maxWidth: "600px",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default MainLayout;
