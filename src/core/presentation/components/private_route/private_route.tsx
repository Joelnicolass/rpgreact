import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const PrivateRoute = ({ children }: Props) => {
  return <>{children}</>;
};

export default PrivateRoute;
