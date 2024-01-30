import { useEffect, useState } from "react";
import { characterCreationServices } from "../../infrastructure/character_creation_services";
import { namesTribesCharacters } from "../../../game_engine/domain/utils";
import { useStore } from "../../../../core/presentation/hooks/use_store";
import { LocalDataBase } from "../../../../core/domain/db/local.db";
import { useRoute } from "../../../../core/presentation/hooks/use_route";
import { ROUTES } from "../../../../core/presentation/routes/app_router";

export enum CharacterCreationFormFields {
  NAME = "name",
  LASTNAME = "lastname",
  TYPE = "type",
  ATK = "atk",
  DEF = "def",
  HP = "hp",
  MANA = "man",
}

export interface CharacterCreationForm {
  [CharacterCreationFormFields.NAME]: string;
  [CharacterCreationFormFields.LASTNAME]: string;
  [CharacterCreationFormFields.TYPE]: string;
  [CharacterCreationFormFields.ATK]: number;
  [CharacterCreationFormFields.DEF]: number;
  [CharacterCreationFormFields.HP]: number;
  [CharacterCreationFormFields.MANA]: number;
}

export const useCharacterCreationViewModel = () => {
  const { setTypeCharacter, setNameCharacter, setAttributesCharacter } =
    useStore();

  const { goTo } = useRoute();

  const [form, setForm] = useState<CharacterCreationForm>({
    name: "",
    lastname: "",
    type: "",
    atk: 0,
    def: 0,
    hp: 0,
    man: 0,
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const selectCharacterType = (character: string) => {
    setForm((prev) => ({
      ...prev,
      type: character,
    }));

    loadAttributes(character);
  };

  const setStats = (type: "atk" | "def" | "hp" | "man", value: number) => {
    setForm((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const loadAttributes = (type: string) => {
    const attr = characterCreationServices.getStatsFromType(type);

    setStats("atk", attr.atk);
    setStats("def", attr.def);
    setStats("hp", attr.hp);
    setStats("man", attr.man);
  };

  const playGame = () => {
    const name = `${form.name} ${form.lastname}`;
    const type = form.type;
    const attributes = {
      hp: form.hp,
      atk: form.atk,
      def: form.def,
      man: form.man,
    };

    setNameCharacter(name);
    setTypeCharacter(type);
    setAttributesCharacter(attributes);

    const character = characterCreationServices.createCharacter(
      name,
      type as "warrior" | "wizard" | "archer",
      {
        attack: form.atk,
        defense: form.def,
        health: form.hp,
        mana: form.man,
      }
    );

    const data = character.save();
    _saveData(JSON.stringify(data));

    goTo(ROUTES.BATTLE, true);
  };

  const _saveData = (data: string) => {
    LocalDataBase.getInstance().save(data);
  };

  // RANDOMIZERS

  const randomName = () =>
    setForm((prev) => ({
      ...prev,
      name: namesTribesCharacters[
        Math.floor(Math.random() * namesTribesCharacters.length)
      ],
    }));

  const randomLastName = () =>
    setForm((prev) => ({
      ...prev,
      lastname:
        namesTribesCharacters[
          Math.floor(Math.random() * namesTribesCharacters.length)
        ],
    }));

  useEffect(() => {
    randomName();
    randomLastName();
  }, []);

  return {
    form,
    playGame,
    handleFormChange,
    selectCharacterType,
    setStats,
    loadAttributes,
    randomName,
    randomLastName,
  };
};
