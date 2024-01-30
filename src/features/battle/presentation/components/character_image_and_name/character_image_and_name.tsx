import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  level: number;
  image: string;
}

const CharacterImageAndName = ({ name, level, image, ...props }: Props) => {
  return (
    <div
      {...props}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...props.style,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <p>{name}</p>
      </div>

      <img
        style={{
          height: "150px",
        }}
        src={image}
      />
    </div>
  );
};

export default CharacterImageAndName;
