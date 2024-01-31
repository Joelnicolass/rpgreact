import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  level: number;
  image: string;
}

const CharacterImageAndName = ({ name, level, image, ...props }: Props) => {
  const MAX_NAME_LENGTH = 8;

  const formatName = (name: string) => {
    if (name.length > MAX_NAME_LENGTH) {
      return name.slice(0, MAX_NAME_LENGTH) + "...";
    }

    return name;
  };

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
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <p>
          {formatName(name)}{" "}
          <span
            style={{
              color: "var(--color-secondary)",
            }}
          >
            ( {level} )
          </span>
        </p>
      </div>

      <img
        style={{
          height: "150px",
          filter: "drop-shadow(0px 0px 100px var(--color-secondary))",
        }}
        src={image}
      />
    </div>
  );
};

export default CharacterImageAndName;
