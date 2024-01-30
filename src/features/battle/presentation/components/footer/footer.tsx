import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Footer = ({ children }: Props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateAreas: `
    "character stats stats stats"
    "character stats stats stats"
    "character skills skills skills"
    `,
        width: "100%",
        height: "250px",
        padding: "20px",
      }}
    >
      {children}
    </div>
  );
};

export default Footer;
