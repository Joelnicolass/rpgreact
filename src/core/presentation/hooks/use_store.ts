import { create, StateCreator } from "zustand";

interface AttributesCharacter {
  hp: number;
  atk: number;
  man: number;
  def: number;
}

// USER SLICE
interface UserSate {
  email: string;

  setEmail: (email: string) => void;
}

const createUserSlice: StateCreator<UserSate> = (set) => ({
  email: "",

  setEmail: (email: string) => set({ email }),
});

// GAME SLICE
interface GameState {
  nameCharacter: string;
  typeCharacter: string;

  attributesCharacter: AttributesCharacter | null;

  setNameCharacter: (nameCharacter: string) => void;
  setTypeCharacter: (typeCharacter: string) => void;
  setAttributesCharacter: (attributesCharacter: AttributesCharacter) => void;

  rawData: string;
  setRawData: (rawData: string) => void;
}

const createGameSlice: StateCreator<GameState> = (set) => ({
  nameCharacter: "",
  typeCharacter: "",
  attributesCharacter: null,

  setNameCharacter: (nameCharacter: string) => set({ nameCharacter }),
  setTypeCharacter: (typeCharacter: string) => set({ typeCharacter }),
  setAttributesCharacter: (attributesCharacter: AttributesCharacter) =>
    set({ attributesCharacter }),

  rawData: "",
  setRawData: (rawData: string) => set({ rawData }),
});

// STORE
type State = UserSate & GameState;

export const useStore = create<State>()((...a) => ({
  ...createUserSlice(...a),
  ...createGameSlice(...a),
}));
