import React from "react";
import Image from "../../../../../core/presentation/components/image/image";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  image: string;
  force?: number;
  cost?: number;
  disabled?: boolean;
}

const Skill = ({ image, name, force, cost, disabled, ...props }: Props) => {
  const MAX_NAME_LENGTH = 10;

  const formattedName = (name: string) => {
    if (name.length > MAX_NAME_LENGTH) {
      return name.slice(0, MAX_NAME_LENGTH) + "...";
    }

    return name;
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        cursor: disabled ? "not-allowed" : "pointer",
        ...props.style,
      }}
      {...props}
    >
      <span
        style={{
          fontSize: "12px",
        }}
      >
        {formattedName(name)}
      </span>

      <div
        style={{
          position: "relative",
        }}
      >
        <Image
          style={{
            height: "50px",
            width: "50px",
            filter: disabled ? "grayscale(100%)" : "none",
          }}
          src={image}
          alt=""
        />

        {force && cost && (
          <p
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: "12px",
            }}
          >{`${force}/${cost}`}</p>
        )}
      </div>
    </div>
  );
};

export default Skill;
