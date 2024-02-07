import { useEffect, useState } from "react";
import { LocalDataBase } from "../../../../core/domain/db/local.db";
import { Character } from "../../../game_engine/domain/entities/character/character.entity";
import { AttributeType } from "../../../game_engine/domain/types";

import archer from "../../../../assets/arquerobg.png";
import warrior from "../../../../assets/gerrerobg.png";
import mage from "../../../../assets/magobg.png";
import skillmagic from "../../../../assets/skillmagic2.webp";
import skillarrow from "../../../../assets/skillarch2.webp";
import skillwarrior from "../../../../assets/skillwarr2.webp";

interface StatDetails {
  name: string;
  max: number;
  color: string;
  current: number;
}

interface PlayerStats {
  health: StatDetails;
  attack: StatDetails;
  defense: StatDetails;
  mana: StatDetails;
}

interface PlayerExp {
  current: number;
  next: number;
}

interface PlayerSkill {
  image: string;
  name: string;
  force: number;
  cost: number;
  cooldown: number;
  cooldownTime: number;
}

interface Player {
  name: string;
  stats: PlayerStats;
  type: string;
  level: number;
  exp: PlayerExp;
  skills: PlayerSkill[];
}

export const usePlayer = () => {
  const [character, setCharacter] = useState<Character>({} as Character);

  const [playerUI, setPlayerUI] = useState<Player>({} as Player);

  const loadSavedGame = () => LocalDataBase.getInstance().load();

  const updateState = (player: Character) => {
    setPlayerUI({
      name: player.name,
      type: player.types[0],
      stats: {
        health: {
          max: player.getAttribute(AttributeType.HP).maxValue,
          current: player.getAttribute(AttributeType.HP).value,
          color: "green",
          name: "HP",
        },
        attack: {
          max: player.getAttribute(AttributeType.ATK).maxValue,
          current: player.getAttribute(AttributeType.ATK).value,
          color: "red",
          name: "ATK",
        },
        defense: {
          max: player.getAttribute(AttributeType.DEF).maxValue,
          current: player.getAttribute(AttributeType.DEF).value,
          color: "yellow",
          name: "DEF",
        },
        mana: {
          max: player.getAttribute(AttributeType.MANA).maxValue,
          current: player.getAttribute(AttributeType.MANA).value,
          color: "blue",
          name: "MP",
        },
      },
      level: player.level,
      exp: {
        current: player.experience,
        next: player.nextLevelExperience,
      },
      skills: player.skills.map((skill) => ({
        image: getSkillImage(player.types[0] as string),
        name: skill.name,
        force: skill.force,
        cost: skill.manaCost,
        cooldown: skill.cooldown,
        cooldownTime: skill.cooldownCounter,
      })),
    });
  };

  const createPlayerInstanceFromLoadGame = (data: string) => {
    const _data = JSON.parse(data);
    const player = Character.load(_data);

    updateState(player);
    setCharacter(player);
  };

  useEffect(() => {
    const data = loadSavedGame();
    createPlayerInstanceFromLoadGame(data);
  }, []);

  const getPlayerImage = () => {
    switch (playerUI.type) {
      case "archer":
        return archer;
      case "warrior":
        return warrior;
      case "wizard":
        return mage;
      default:
        throw new Error("Invalid player type: " + playerUI.type);
    }
  };

  const getSkillImage = (skill: string) => {
    switch (skill) {
      case "wizard":
        return skillmagic;
      case "arrow":
        return skillarrow;
      case "warrior":
        return skillwarrior;
      default:
        throw new Error("Invalid skill type: " + skill);
    }
  };

  const getStatsBars = () => [
    {
      ...playerUI.stats.health,
    },
    {
      ...playerUI.stats.mana,
    },
  ];

  const getStatsIndicators = () => [
    {
      ...playerUI.stats.attack,
    },
    {
      ...playerUI.stats.defense,
    },
    {
      name: "EXP",
      max: playerUI.exp.next,
      current: playerUI.exp.current,
      color: "purple",
    },
  ];

  const getSkills = () => [...playerUI.skills];

  return {
    player: {
      playerUI,
      character,
    },
    getPlayerImage,
    getStatsBars,
    getStatsIndicators,
    getSkills,
  };
};
