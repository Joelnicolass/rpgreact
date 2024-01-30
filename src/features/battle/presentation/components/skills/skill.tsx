import React from "react";

type Props = {
  name: string;
  image: string;
  force?: number;
  cost?: number;
};

const Skill = ({ image, name, force, cost }: Props) => {
  const formattedName = (name: string) => {
    if (name.length > 10) {
      return name.slice(0, 10) + "...";
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
      }}
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
        <img
          style={{
            height: "50px",
            width: "50px",
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
