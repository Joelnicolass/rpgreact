import React from "react";
import MainLayout from "../../../../core/presentation/components/main_layout/main_layout";

import archer from "../../../../assets/arquerobg.png";
import warrior from "../../../../assets/gerrerobg.png";
import mage from "../../../../assets/magobg.png";

import enemy1 from "../../../../assets/enemigo1.png";
import enemy2 from "../../../../assets/enemigo2.png";
import enemy3 from "../../../../assets/enemigo3.png";
import enemy4 from "../../../../assets/enemigo4.png";
import enemy5 from "../../../../assets/enemigo5.png";
import enemy6 from "../../../../assets/enemigo6.png";
import enemy7 from "../../../../assets/enemigo7.png";
import enemy8 from "../../../../assets/enemigo8.png";
import enemy9 from "../../../../assets/enemigo9.png";
import enemy10 from "../../../../assets/enemigo10.png";
import enemy11 from "../../../../assets/enemigo11.png";
import enemy12 from "../../../../assets/enemigo12.png";
import enemy13 from "../../../../assets/enemigo13.png";
import enemy14 from "../../../../assets/enemigo14.png";
import enemy15 from "../../../../assets/enemigo15.png";
import enemy16 from "../../../../assets/enemigo16.png";

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
import Header from "../components/header/header";
import EnemySection from "../components/enemy_section/enemy_section";
import EnemyImage from "../components/enemy_image/enemy_image";

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
      <Header>
        <EnemySection>
          <h2>Opyguá Maestro de ceremonias</h2>

          <PixelatedBar name="HP" color="green" max={1000} current={790} />
        </EnemySection>

        <EnemyImage image={enemy16} />
      </Header>

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
