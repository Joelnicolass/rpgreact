import React from "react";
import PixelatedInput from "../../../../../core/presentation/components/pixelated/pixelated_input/pixelated_input";

type Props = {
  atk: number;
  def: number;
  hp: number;
  man: number;
  setAtk: (atk: number) => void;
  setDef: (def: number) => void;
  setHp: (hp: number) => void;
  setMan: (mana: number) => void;
};

const Stats = ({ atk, def, hp, man, setAtk, setDef, setHp, setMan }: Props) => {
  return (
    <div
      style={{
        gap: "50px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <label
        style={{
          color: "var(--color-secondary)",
        }}
      >
        ATK
        <PixelatedInput
          min={0}
          value={atk}
          placeholder="ATK"
          type="number"
          onChange={(e) => setAtk(Number(e.target.value))}
        />
      </label>

      <label
        style={{
          color: "var(--color-secondary)",
        }}
      >
        DEF
        <PixelatedInput
          min={0}
          value={def}
          placeholder="DEF"
          type="number"
          onChange={(e) => setDef(Number(e.target.value))}
        />
      </label>

      <label
        style={{
          color: "var(--color-secondary)",
        }}
      >
        HP
        <PixelatedInput
          min={1}
          value={hp}
          placeholder="HP"
          type="number"
          onChange={(e) => setHp(Number(e.target.value))}
        />
      </label>

      <label
        style={{
          color: "var(--color-secondary)",
        }}
      >
        MANA
        <PixelatedInput
          min={0}
          value={man}
          placeholder="MANA"
          type="number"
          onChange={(e) => setMan(Number(e.target.value))}
        />
      </label>
    </div>
  );
};

export default Stats;
