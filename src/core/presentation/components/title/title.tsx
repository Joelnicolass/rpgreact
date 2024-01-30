import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Title = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Title;
