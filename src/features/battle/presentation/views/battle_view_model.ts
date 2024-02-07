import { useEffect, useState } from "react";
import { usePlayer } from "../hooks/use_player";
import {
  Character,
  CharacterFactory,
} from "../../../game_engine/domain/entities/character/character.entity";
import { AttributesFactory } from "../../../game_engine/domain/entities/attribute/attribute.entity";
import { AttributeType } from "../../../game_engine/domain/types";

enum BattleState {
  PLAYER_TURN = "PLAYER_TURN",
  ENEMY_TURN = "ENEMY_TURN",
  PLAYER_WIN = "PLAYER_WIN",
  ENEMY_WIN = "ENEMY_WIN",
}

enum Difficulty {
  EASY = 1,
  MEDIUM = 2,
  HARD = 3,
}

export const useBattleViewModel = () => {
  const {
    player,
    getSkills,
    getStatsBars,
    getPlayerImage,
    getStatsIndicators,
  } = usePlayer();

  const [battleState, setBattleState] = useState(BattleState.PLAYER_TURN);

  const [turn, setTurn] = useState(0);
  const nextTurn = () => {};

  const [enemy, setEnemy] = useState<Character>();

  const generateEnemy = (difficulty: Difficulty) => {
    const playerLevel = player.playerUI.level;
    const enemyLevel = playerLevel + difficulty;

    const enemyInstance = CharacterFactory.createCustomCharacter(
      "Test",
      enemyLevel,
      "warrior",
      {
        attack: 100,
        defense: 10,
        health: 100,
        mana: 100,
      }
    );

    setEnemy(enemyInstance);
  };

  const enemyHP = enemy?.getAttribute(AttributeType.HP);

  const attack = (skill: string) => {
    if (battleState === BattleState.PLAYER_TURN) {
      player.character.useSkill(skill, [enemy!]);

      console.log("Player attacks");
      console.log(enemy?.getAttribute(AttributeType.HP).value);

      setEnemy(enemy);
      setTurn(turn + 1);
    }
  };

  useEffect(() => {
    generateEnemy(Difficulty.EASY);
  }, []);

  return {
    playerState: {
      player,
      getPlayerImage,
      getStatsBars,
      getStatsIndicators,
      getSkills,
    },
    enemyState: {
      enemy,
      enemyHP,
    },
    gameState: {
      battleState,
    },
    actions: {
      attack,
    },
  };
};
