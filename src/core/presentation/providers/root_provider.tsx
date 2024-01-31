import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const RootProvider = ({ children }: Props) => {
  return <>{children}</>;
};

export default RootProvider;
