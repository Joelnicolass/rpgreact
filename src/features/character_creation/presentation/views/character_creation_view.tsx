import React, { useState } from "react";
import MainLayout from "../../../../core/presentation/components/main_layout/main_layout";
import PixelatedInput from "../../../../core/presentation/components/pixelated/pixelated_input/pixelated_input";
import CharacterSelect from "../components/character_select/character_select";
import PixelatedButton from "../../../../core/presentation/components/pixelated/pixelated_button/pixelated_button";
import Stats from "../components/stats/stats";
import {
  CharacterCreationFormFields,
  useCharacterCreationViewModel,
} from "./character_creation_view_model";

const CharacterCreationView = () => {
  const {
    form,
    handleFormChange,
    selectCharacterType,
    setStats,
    playGame,
    randomLastName,
    randomName,
  } = useCharacterCreationViewModel();

  return (
    <MainLayout>
      <h1>Crea tu Personaje</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
          padding: "20px",
          borderTop: "4px solid white",
          width: "100%",
        }}
      >
        <PixelatedInput
          type="text"
          placeholder="Nombre"
          value={form.name}
          onChange={handleFormChange}
          name={CharacterCreationFormFields.NAME}
        />
        <PixelatedInput
          type="text"
          placeholder="Apellido"
          value={form.lastname}
          onChange={handleFormChange}
          name={CharacterCreationFormFields.LASTNAME}
        />

        <PixelatedButton
          style={{ width: "50px" }}
          secondary
          onClick={() => {
            randomName();
            randomLastName();
          }}
        >
          ↻
        </PixelatedButton>
      </div>

      <CharacterSelect onSelected={selectCharacterType} />

      <div
        style={{
          gap: "10px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderTop: "4px solid white",
          width: "100%",
        }}
      >
        <h2>Estadisticas</h2>

        <Stats
          atk={form.atk}
          def={form.def}
          hp={form.hp}
          man={form.man}
          setAtk={(value) => setStats("atk", value)}
          setDef={(value) => setStats("def", value)}
          setHp={(value) => setStats("hp", value)}
          setMan={(value) => setStats("man", value)}
        />

        <PixelatedButton
          disabled={
            !form[CharacterCreationFormFields.TYPE] ||
            !form[CharacterCreationFormFields.NAME] ||
            !form[CharacterCreationFormFields.LASTNAME]
          }
          secondary
          onClick={playGame}
        >
          Continuar
        </PixelatedButton>
      </div>
    </MainLayout>
  );
};

export default CharacterCreationView;
