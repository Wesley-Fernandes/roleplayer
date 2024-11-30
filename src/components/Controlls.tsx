import React, { useRef, useState } from "react";
import { usePlayer } from "../hooks/usePlayer";
import { Button } from "./ui/button";
import AudioPlayer from 'react-h5-audio-player';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuPortal, DropdownMenuSubContent } from "@/components/ui/dropdown-menu";
import { Info } from "lucide-react";
import { toast } from "sonner";


const Controls: React.FC= () => {

  const {modifyPlayer, players, addPlayer} = usePlayer()
  const playerRef = useRef<AudioPlayer|null>(null)
  const [isPlaying, setIsPlaying] = useState(false)


  const id = "player-1"
  const player = players.filter(p => p.id === id)[0]

  const rotatePlayer = () => {
    modifyPlayer(id,  {rotation: player.rotation + 60});
  };

  const toogleDimensional = () => {
    modifyPlayer(id,  {isDimensional: !player.isDimensional});
  }

  const flipPlayer = () => {
    modifyPlayer(player.id, {scaleX: player.scaleX === 1 ? -1 : 1 });
  };

  const add = () => {
    addPlayer({
      id: "player-1",
      x: 100,
      y: 100,
      width: 90,
      height: 200,
      scaleX: 1,
      rotation: 0,
      imageSrc: "/player.png",
      isDimensional: false,
    });
  }


  const tooglePlayer = () => {
    if(playerRef.current){
      const msc = playerRef.current
      const isPlaying = msc.isPlaying()
      switch(isPlaying){
        case true:
          msc.audio.current?.pause();
          setIsPlaying(false)
          break;
        case false:
          msc.audio.current?.play()
          setIsPlaying(true)
          break;
      }
    }
  }

  const onDevelopment = () => {
    toast.info("Em desenvolvimento...")
  }
  return (
    <div className="">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline"><Info /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    Estatisticas
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem disabled={!player} onClick={onDevelopment}>
                        Minhas estatisticas
                      </DropdownMenuItem>
                      <DropdownMenuItem disabled={!player} onClick={onDevelopment}>
                        Aumentar/Diminuir HP
                      </DropdownMenuItem>
                      <DropdownMenuItem disabled={!player} onClick={onDevelopment}>
                        Aumentar/Diminuir PS
                      </DropdownMenuItem>
                      <DropdownMenuItem disabled={!player} onClick={onDevelopment}>
                        Janela de items
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    Personagem
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem disabled={!player} onClick={toogleDimensional}>
                        Dimensionamento {player?.isDimensional ? "ativo":"desativado"}
                      </DropdownMenuItem>
                      <DropdownMenuItem disabled={!player} onClick={flipPlayer}>
                        Inverter horizontalmente
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={add} disabled={players.length >0}>
                        Adicionar personagem 
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    Grupo
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem disabled={!player} onClick={onDevelopment}>
                        Estatisticas do grupo
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={tooglePlayer}>
                        {isPlaying ? "Desligar BGS": "Ligar BGS"}
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                    
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
        <AudioPlayer
          autoPlay
          ref={playerRef}
          className="absolute -z-40 -top-40"
          src="/songs/Sangue.mp3"
        />
    </div>
  );
};


export default Controls;
