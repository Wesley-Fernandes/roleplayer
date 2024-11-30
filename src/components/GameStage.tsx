import React from "react";
import { Stage, Layer } from "react-konva";
import Player from "./Player";
import { PlayerType } from "../types/player";
import { useScenary } from "../hooks/useScenary";

type GameStageProps = {
  players: PlayerType[];
};

const GameStage: React.FC<GameStageProps> = ({ players }) => {

  const {scenary} = useScenary()
  return (
    <Stage width={scenary.width} height={scenary.height}>
      <Layer>
        {
          players.map((player) => (
            <Player key={player.id} player={player} />
          ))
        }
      </Layer>
    </Stage>
  );
};

export default GameStage;
