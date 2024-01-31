import React from "react";
import Image from "../../../../../core/presentation/components/image/image";

type Props = {
  image: string;
};

const EnemyImage = ({ image }: Props) => {
  return (
    <Image
      style={{
        position: "absolute",
        objectFit: "contain",
        zIndex: -1,
        height: "80dvh",
        width: "100%",
        transition: "all 0.5s ease",
        animation: "1.5s ease-in-out infinite",
        filter: "drop-shadow(0px 0px 100px var(--color-secondary))",
      }}
      src={image}
      alt=""
    />
  );
};

export default EnemyImage;
