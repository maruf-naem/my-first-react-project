
import type { PlayerType } from "../../../../PlayerType";
import UnselectdPlayerCard from "./UnselectdPlayerCard";

interface DataProps {
  data: PlayerType[];
  handleSelectPLayer: (value: number) => void;
  selectedPlayers: PlayerType[]
}


const UnselectedPlayers = ({
  data,
  handleSelectPLayer,
  selectedPlayers
}: DataProps) => {
  return (
    <div className="md:w-[70%] grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {data.map((item) => {
        const isSelected = selectedPlayers.some((player) => {
          return player.id === item.id;
        });
        return (
          <UnselectdPlayerCard
            player={item}
            key={item.id}
            handleSelectPLayer={handleSelectPLayer}
            isSelected={isSelected}
          />
        );
      })}
    </div>
  );
};

export default UnselectedPlayers;