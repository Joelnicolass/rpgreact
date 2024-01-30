import { AttributesFactory } from "../../game_engine/domain/entities/attribute/attribute.entity";
import { CharacterFactory } from "../../game_engine/domain/entities/character/character.entity";

export const characterCreationServices = {
  getStatsFromType: (type: string) => {
    const archer = AttributesFactory.createAttributesArcher();

    const warrior = AttributesFactory.createAttributesWarrior();

    const wizard = AttributesFactory.createAttributesWizard();

    const attrReducer = (acc: any, curr: any) => ({
      ...acc,
      [curr.name]: curr.value,
    });

    const attrAdapter = (attr: {
      health: number;
      mana: number;
      attack: number;
      defense: number;
    }) => ({
      atk: attr.attack,
      def: attr.defense,
      man: attr.mana,
      hp: attr.health,
    });

    switch (type) {
      case "archer":
        return attrAdapter(archer.reduce(attrReducer, {}));
      case "warrior":
        return attrAdapter(warrior.reduce(attrReducer, {}));
      case "wizard":
        return attrAdapter(wizard.reduce(attrReducer, {}));
      default:
        throw new Error("Invalid type");
    }
  },

  createCharacter: (
    name: string,
    type: "warrior" | "wizard" | "archer",
    attr: {
      health: number;
      mana: number;
      attack: number;
      defense: number;
    }
  ) => {
    const character = CharacterFactory.createCustomCharacter(name, 1, type, {
      health: attr.health,
      mana: attr.mana,
      attack: attr.attack,
      defense: attr.defense,
    });

    return character;
  },
};
