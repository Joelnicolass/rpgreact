import React from "react";

type Props = {
  name: string;
  image: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: React.CSSProperties;
  selected?: boolean;
};

const CharacterSelectItem = ({
  name,
  image,
  style,
  selected,
  onClick,
}: Props) => {
  return (
    <div
      style={{
        width: "30%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        filter: selected ? "grayscale(0)" : "grayscale(1)",
        cursor: "pointer",
        ...style,
      }}
      onClick={onClick}
    >
      <span>{name}</span>
      <img style={{ width: "100%" }} src={image} />
    </div>
  );
};

export default CharacterSelectItem;
