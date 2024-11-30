import React, { useRef, useEffect} from "react";
import { Image, Transformer } from "react-konva";
import useImage from "use-image";
import { PlayerType } from "../types/player";
import { usePlayer } from "../hooks/usePlayer";
type PlayerProps = {
  player: PlayerType;
};

const Player: React.FC<PlayerProps> = ({ player }) => {
  const {modifyPlayer} = usePlayer()
  const playerRef = useRef<any>(null); // Referência ao jogador
  const transformerRef = useRef<any>(null); // Referência ao Transformer
  const [image] = useImage(player.imageSrc);

  const handleDragMove = (e: any) => {
    const { x, y } = e.target.position();
    modifyPlayer(player.id, {x, y});
  };

  const handleTransformEnd = () => {
    const node = playerRef.current;
    const scaleX = node.scaleX();
    const scaleY = node.scaleY();
    const rotation = node.rotation();

    modifyPlayer(player.id, {
      width: node.width() * scaleX,
      height: node.height() * scaleY,
      scaleX,
      rotation,
    });
    node.scaleX(1);
    node.scaleY(1); // Reset scale
  };

  useEffect(() => {
    if (transformerRef.current && playerRef.current) {
      transformerRef.current.nodes([playerRef.current]);
      transformerRef.current.getLayer()?.batchDraw();
    }
  }, [player]);

  return (
    <>
      <Image
          ref={playerRef} // Conecta a referência
          x={player.x}
          y={player.y}
          width={player.width}
          height={player.height}
          draggable
          scaleX={player.scaleX}
          rotation={player.rotation}
          image={image}
          onDragMove={handleDragMove}
          onTransformEnd={handleTransformEnd}
        />
      <Transformer
          ref={transformerRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 20 || newBox.height < 20) return oldBox;
            return newBox;
          }}
          rotateEnabled={player.isDimensional ?? false}
          resizeEnabled={player.isDimensional ?? false}
          borderEnabled={player.isDimensional ?? false}
        />
    </>
  );
};

export default Player;
