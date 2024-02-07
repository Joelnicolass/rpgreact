import React from "react";
import MainLayout from "../../../../core/presentation/components/main_layout/main_layout";

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

import Skill from "../components/skills/skill";
import CharacterImageAndName from "../components/character_image_and_name/character_image_and_name";
import PixelatedBar from "../../../../core/presentation/components/pixelated/pixelated_bar/pixelated_bar";
import Stats from "../components/stats/stats";
import Footer from "../components/footer/footer";
import ListSkills from "../components/list_skills/list_skills";
import Header from "../components/header/header";
import EnemySection from "../components/enemy_section/enemy_section";
import EnemyImage from "../components/enemy_image/enemy_image";
import RoomView from "../../../room/presentation/views/room_view";
import { useBattleViewModel } from "./battle_view_model";

const BattleView = () => {
  const {
    playerState: {
      player: { playerUI },
      getPlayerImage,
      getStatsBars,
      getStatsIndicators,
      getSkills,
    },
    enemyState: { enemy, enemyHP },
    actions: { attack },
  } = useBattleViewModel();

  if (!playerUI.type) return <div>LOADING</div>;

  return (
    <MainLayout>
      <Header>
        <EnemySection>
          <h2>{enemy?.name}</h2>

          <PixelatedBar
            name={"HP"}
            color="green"
            max={enemyHP!.maxValue}
            current={enemyHP!.value}
          />
        </EnemySection>

        <EnemyImage image={enemy3} />
      </Header>

      <Footer>
        <CharacterImageAndName
          style={{ gridArea: "character" }}
          name={playerUI.name}
          image={getPlayerImage()}
          level={playerUI.level}
        />

        <Stats
          style={{ gridArea: "stats" }}
          dataBars={getStatsBars()}
          dataStats={getStatsIndicators()}
          renderBarItem={(item) => (
            <PixelatedBar
              key={item.name}
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
          data={getSkills()}
          renderItem={(item) => (
            <Skill
              key={item.name}
              image={item.image}
              name={item.name}
              force={item.force}
              cost={item.cost}
              onClick={() => {
                attack(item.name);
              }}
            />
          )}
        />
      </Footer>
    </MainLayout>
  );
};

export default BattleView;
