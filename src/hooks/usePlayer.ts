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
        set(state => ({
            players: state.players.map(p => p.id === id? {...p,...player} : p)
        }))
    }
}))