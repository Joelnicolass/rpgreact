import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Header = ({ children }: Props) => {
  return (
    <div
      style={{
        height: "50dvh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        //maxHeight: "300px" mover a media query para devices pequenos
      }}
    >
      {children}
    </div>
  );
};

export default Header;
