
import type { PlayerType } from "../../../../PlayerType";
import UnselectdPlayerCard from "./UnselectdPlayerCard";

interface DataProps {
  data: PlayerType[];
  handleSelectPLayer: (value:number)=>void
}


const UnselectedPlayers = ({ data, handleSelectPLayer }: DataProps) => {
  return (
    <div className="md:w-[70%] flex gap-5 flex-col md:flex-row md:flex-wrap ">
      {data.map((item) => {
        return (
          <UnselectdPlayerCard
            player={item}
            key={item.id}
            handleSelectPLayer={handleSelectPLayer}
          />
        );
      })}
    </div>
  );
};

export default UnselectedPlayers;