import React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const PublicRoute = ({ children }: Props) => {
  return <>{children}</>;
};

export default PublicRoute;
