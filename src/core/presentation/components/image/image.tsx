import React from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {}

const Image = ({ ...props }: Props) => {
  return (
    <img
      {...props}
      style={{
        imageRendering: "pixelated",

        ...props.style,
      }}
    />
  );
};

export default Image;
