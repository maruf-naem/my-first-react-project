import type { PlayerType } from "../../../../PlayerType";
import SelectedPlayerCard from "./SelectedPlayerCard";

interface SlectedPlayersProps {
  selectedPlayers: PlayerType[];
  handleUnSelect: (value: number) => void;
}

const SelectedPlayers = ({
  selectedPlayers,
  handleUnSelect,
}: SlectedPlayersProps) => {
  const isData = selectedPlayers.length;
  if (isData === 0) {
    return (
      <div className="w-full md:w-[30%]">
        
        <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center">
          
         
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-sm">
            
            ⚽
          </div>
          
          <h3 className="text-base font-semibold text-gray-800">
            
            No Players Selected
          </h3>
         
          <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
            
            You haven't selected any players yet. Choose players from the list
            to build your squad.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full md:w-[30%] flex flex-col gap-4 ">
      {selectedPlayers.map((item) => {
        return (
          <SelectedPlayerCard
            SelectedPlayer={item}
            handleUnSelect={handleUnSelect}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default SelectedPlayers;
