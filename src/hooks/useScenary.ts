import { create } from "zustand";
import { Scenary } from "../types/scenary";
import scenarys from "../assets/scenarys.json"




interface Props{
    scenary: Scenary;
    setScenary: (scenary: string) => void;
}
export const useScenary = create<Props>((set)=>({
    scenary: scenarys[0],
    setScenary: (id:string) => set({ scenary: scenarys.filter((scenary)=>scenary.id===id)[0] }),
}))