import { atom } from "jotai";
import { gameMode } from "types";

export const gameModeAtom = atom<gameMode | null>(null);
