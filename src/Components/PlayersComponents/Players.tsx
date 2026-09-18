import { use, useState } from "react";
import type { PlayerType } from "../../PlayerType";
import SelectedPlayers from "./PlayersSection/SelectedPlayers/SelectedPlayers";
import UnselectedPlayers from "./PlayersSection/UnSelectedPlayers/UnselectedPlayers";
import PlayerTitle from "./PlayerTitleSection/PlayerTitle";


interface DataProps {
  data: Promise<PlayerType[]>;
}


const Players = ({ data }: DataProps) => {

  const datas: PlayerType[] = use(data);
  const[selectedPlayers, setSelecteddPlayer] = useState<PlayerType[]>([])
  const handleSelectPLayer = (value:number) => {
   const newData = datas.find((item)=>{
      return item.id === value
    })
    if (!newData) return;
    setSelecteddPlayer([...selectedPlayers, newData])
    console.log(selectedPlayers);
    
    
  };



  return (
    <div className="container mx-auto py-20 px-8">
      <PlayerTitle />
      <div className="flex justify-between gap-10 flex-col flex-col-reverse md:flex-row ">
        <UnselectedPlayers
          data={datas}
          handleSelectPLayer={handleSelectPLayer}
        />
        <SelectedPlayers selectedPlayers={selectedPlayers} />
      </div>
    </div>
  );
};

export default Players;