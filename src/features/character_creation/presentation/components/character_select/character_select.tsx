import React from "react";

import archer from "../../../../../assets/arquero2.webp";
import mague from "../../../../../assets/mago1.webp";
import warrior from "../../../../../assets/guerrero3.webp";
import CharacterSelectItem from "../character_select_item/character_select_item";

import styles from "./character_select.module.css";

enum CharacterType {
  ARCH = "archer",
  MAG = "wizard",
  WAR = "warrior",
}

type Props = {
  onSelected: (character: string) => void;
};

const CharacterSelect = ({ onSelected }: Props) => {
  const [selected, setSelected] = React.useState<CharacterType | null>(null);

  const handleClick = (character: string) => {
    onSelected(character);
    setSelected(character as CharacterType);
  };

  return (
    <div className={styles.container}>
      <h2>Clase</h2>
      <div className={styles.characterList}>
        <CharacterSelectItem
          name="Arquero Atacama"
          selected={selected === CharacterType.ARCH}
          image={archer}
          onClick={() => handleClick(CharacterType.ARCH)}
        />

        <CharacterSelectItem
          name="Opygua Guaraní"
          selected={selected === CharacterType.MAG}
          image={mague}
          onClick={() => handleClick(CharacterType.MAG)}
        />

        <CharacterSelectItem
          name="Asesino Selk’nam"
          selected={selected === CharacterType.WAR}
          image={warrior}
          onClick={() => handleClick(CharacterType.WAR)}
        />
      </div>
    </div>
  );
};

export default CharacterSelect;
