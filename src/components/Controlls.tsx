import React, { useRef, useState } from "react";
import { usePlayer } from "../hooks/usePlayer";
import { Button } from "./ui/button";
import AudioPlayer from 'react-h5-audio-player';
import { ArrowLeftRight, RotateCcw, User, Volume, VolumeOff } from "lucide-react";


const Controls: React.FC= () => {

  const {modifyPlayer, players, addPlayer} = usePlayer()
  const playerRef = useRef<AudioPlayer|null>(null)
  const [isPlaying, setIsPlaying] = useState(false)


  const id = "player-1"
  const player = players.filter(p => p.id === id)[0]

  const rotatePlayer = () => {
    modifyPlayer(id,  {rotation: player.rotation + 60});
  };


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
  return (
    <div className="mt-2 ml-2 flex items-center gap-3 fixed z-10">
      <Button size="icon" variant="outline" onClick={flipPlayer}><ArrowLeftRight /></Button>
      <Button size="icon" variant="outline" onClick={rotatePlayer}><RotateCcw/></Button>
      <Button size="icon" variant="outline" disabled={players.length > 0} onClick={add}><User/></Button>
      <Button size="icon" variant="outline" onClick={tooglePlayer}>{isPlaying ? <VolumeOff/>: <Volume/>}</Button>
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
