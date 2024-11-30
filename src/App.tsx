

import Controlls from "./components/Controlls";
import GameStage from "./components/GameStage";
import { usePlayer } from "./hooks/usePlayer";
import { useScenary } from "./hooks/useScenary";

const App = () => {
  const {players} = usePlayer()
  const {scenary} = useScenary()
  return (
    <main style={{backgroundImage: `url(${scenary.background})`, backgroundSize:"100%", width: scenary.width, height: scenary.height}}>
      <Controlls />
      <GameStage players={players} />
    </main>
  );
};

export default App;
