import React from "react";
import MainLayout from "../../../../core/presentation/components/main_layout/main_layout";

import archer from "../../../../assets/arquerobg.png";
import warrior from "../../../../assets/gerrerobg.png";
import mage from "../../../../assets/magobg.png";

import skillmagic from "../../../../assets/skillmagic.webp";
import skillarrow from "../../../../assets/skillarch2.webp";
import skillwarrior from "../../../../assets/skillwarr2.webp";
import skillmaster from "../../../../assets/skilldeathmaster3.webp";
import skilldeath from "../../../../assets/skilldeathmaster3.webp";
import Skill from "../components/skills/skill";
import CharacterImageAndName from "../components/character_image_and_name/character_image_and_name";
import PixelatedBar from "../../../../core/presentation/components/pixelated/pixelated_bar/pixelated_bar";
import Stats from "../components/stats/stats";
import Footer from "../components/footer/footer";
import ListSkills from "../components/list_skills/list_skills";

const mockStats = [
  {
    name: "ATK",
    color: "red",
    max: 100,
    current: 50,
  },
  {
    name: "DEF",
    color: "yellow",
    max: 100,
    current: 50,
  },
  {
    name: "EXP",
    color: "purple",
    max: 100,
    current: 50,
  },
];

const mockBars = [
  {
    name: "HP",
    color: "green",
    max: 100,
    current: 50,
  },
  {
    name: "MP",
    color: "blue",
    max: 100,
    current: 50,
  },
];

const mockSkills = [
  {
    image: skillmagic,
    name: "Ataque magico de opy",
    force: 10,
    cost: 50,
  },
  {
    image: skillarrow,
    name: "Ataque de arqierp",
    force: 10,
    cost: 50,
  },
  {
    image: skillwarrior,
    name: "Ataque normal",
    force: 10,
    cost: 50,
  },
  {
    image: skillmaster,
    name: "Ataque mestro",
    force: 10,
    cost: 50,
  },
];

const BattleView = () => {
  return (
    <MainLayout>
      <div
        style={{
          height: "50dvh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          //maxHeight: "300px" mover a media query para devices pequenos
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            textWrap: "pretty",
            gap: "20px",
          }}
        >
          <h2>Opyguá Maestro de ceremonias</h2>

          <PixelatedBar name="HP" color="green" max={1000} current={790} />
        </div>

        <img
          style={{
            position: "absolute",
            objectFit: "contain",
            zIndex: -1,
            height: "80dvh",
            width: "100%",
            transition: "all 0.5s ease",
            animation: "shake 1.5s ease-in-out 0.5s infinite",
            imageRendering: "pixelated",
            filter: "drop-shadow(0px 0px 100px var(--color-secondary))",
          }}
          src={warrior}
          alt=""
        />
      </div>

      {/* 
      FOOTER
      */}

      <Footer>
        <CharacterImageAndName
          style={{ gridArea: "character" }}
          name="Pituar ñorà"
          image={archer}
          level={1}
        />

        <Stats
          style={{ gridArea: "stats" }}
          dataBars={mockBars}
          dataStats={mockStats}
          renderBarItem={(item) => (
            <PixelatedBar
              style={{ marginBottom: "5px" }}
              name={item.name}
              color={item.color}
              max={item.max}
              current={item.current}
            />
          )}
        />

        <ListSkills
          style={{ gridArea: "skills" }}
          data={mockSkills}
          renderItem={(item) => (
            <Skill
              image={item.image}
              name={item.name}
              force={item.force}
              cost={item.cost}
            />
          )}
        />
      </Footer>
    </MainLayout>
  );
};

export default BattleView;
