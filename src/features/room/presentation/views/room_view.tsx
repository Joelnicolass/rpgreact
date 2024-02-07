import React from "react";
import MainLayout from "../../../../core/presentation/components/main_layout/main_layout";

import maz1 from "../../../../assets/mazmorra1.webp";
import maz2 from "../../../../assets/mazmorra2.webp";
import maxz3 from "../../../../assets/mazmorra3.webp";
import maz4 from "../../../../assets/mazmorra4.webp";

import way1 from "../../../../assets/camino1.png";
import way2 from "../../../../assets/camino2.png";
import way3 from "../../../../assets/camino3.png";

import PixelatedButton from "../../../../core/presentation/components/pixelated/pixelated_button/pixelated_button";
import Image from "../../../../core/presentation/components/image/image";

const RoomView = () => {
  const waysTexts = [
    "En el camino hay una bifurcación, ¿hacia dónde quieres ir?",
    "Te encuentras un poco desorientado, ¿hacia dónde quieres ir?",
    "El camino se divide, ¿hacia dónde quieres ir?",
  ];

  const specialTexts = [
    "Delante de ti hay un sitio muy extraño, ¿quieres entrar?",
    "Que extraña sensación, es como si algo te llamara, ¿quieres entrar?",
    "Un ruido extraño viene de un lugar cercano, ¿quieres investigar?",
  ];

  const random = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const randomWay = random(waysTexts);
  const randomSpecial = random(specialTexts);

  const isSpecial = Math.random() > 0.1;

  const rooms = [maz1, maz2, maxz3, maz4];
  const ways = [way1, way2, way3];

  const randomRoomImage = rooms[Math.floor(Math.random() * rooms.length)];

  const randomWayImage = ways[Math.floor(Math.random() * ways.length)];

  return (
    <MainLayout>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          textWrap: "pretty",
          padding: "20px",

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {isSpecial ? <h1>{randomSpecial}</h1> : <h1>{randomWay}</h1>}

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
            gap: "20px",
          }}
        >
          <PixelatedButton
            style={{
              width: "200px",
              height: "200px",
            }}
          >
            Adentrarse
            <Image
              src={randomRoomImage}
              alt="way1"
              style={{
                width: "80%",
                height: "80%",
                borderRadius: "50%",
              }}
            />
          </PixelatedButton>

          <PixelatedButton
            style={{
              width: "200px",
              height: "200px",
            }}
          >
            Ignorar
            <Image
              src={randomWayImage}
              alt="way2"
              style={{
                width: "80%",
                height: "80%",
                borderRadius: "50%",
              }}
            />
          </PixelatedButton>
        </div>
      </div>
    </MainLayout>
  );
};

export default RoomView;
