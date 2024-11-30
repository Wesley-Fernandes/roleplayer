import { create } from "zustand";
import { PlayerType } from "../types/player";

interface Props{
    players: PlayerType[];
    modifyPlayer: (id: string, player:Partial<PlayerType>) =>void;
    addPlayer: (player: PlayerType) => void;
    removePlayer: (id: string) => void;
}
export const usePlayer = create<Props>((set)=>({
    players: [],
    addPlayer: (player) => {
        set(state => ({
            players: [...state.players, player]
        }))
    },
    removePlayer: (id) => {
        set(state => ({
            players: state.players.filter(player => player.id!== id)
        }))
    },
    modifyPlayer: (id, player) => {
        set(state => {
          const index = state.players.findIndex(p => p.id === id);
          if (index === -1) return state; // Evita loops se o jogador não existir
          const updatedPlayers = [...state.players];
          updatedPlayers[index] = { ...updatedPlayers[index], ...player };
          return { players: updatedPlayers };
        });
      }
}))