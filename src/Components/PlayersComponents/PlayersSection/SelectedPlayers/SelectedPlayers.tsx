import type { PlayerType } from "../../../../PlayerType";
import SelectedPlayerCard from "./SelectedPlayerCard";


interface SlectedPlayersProps {
  selectedPlayers: PlayerType[];
}

const SelectedPlayers = ({ selectedPlayers }: SlectedPlayersProps) => {
  return (
    <div className="w-full md:w-[30%] flex flex-col gap-4 ">
      {
      selectedPlayers.map((item)=>{
        return <SelectedPlayerCard SelectedPlayer = {item} />
      })
      }
    </div>
  );
};

export default SelectedPlayers;