import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[];
}

const Footer = ({ children, ...props }: Props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateAreas: `
    "character stats stats stats"
    "character stats stats stats"
    "skills skills skills skills"
    `,
        width: "100%",
        height: "45dvh",
        maxHeight: "300px",
        padding: "20px",
        justifyContent: "space-between",
        alignItems: "center",
        ...props.style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Footer;
