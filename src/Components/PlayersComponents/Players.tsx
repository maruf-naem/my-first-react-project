import { use, useState } from "react";
import type { PlayerType } from "../../PlayerType";
import SelectedPlayers from "./PlayersSection/SelectedPlayers/SelectedPlayers";
import UnselectedPlayers from "./PlayersSection/UnSelectedPlayers/UnselectedPlayers";
import PlayerTitle from "./PlayerTitleSection/PlayerTitle";
import { toast } from "react-toastify";

interface DataProps {
  data: Promise<PlayerType[]>;
}

const Players = ({ data }: DataProps) => {
  const datas: PlayerType[] = use(data);
  const [selectedPlayers, setSelecteddPlayer] = useState<PlayerType[]>([]);

  const handleSelectPLayer = (value: number) => {
    const newData = datas.find((item) => item.id === value);
    if (!newData) {
      return;
    }
    const alreadySelected = selectedPlayers.some(
      (player) => player.id === newData.id,
    );
    if (alreadySelected) {
      return;
    }
    setSelecteddPlayer([...selectedPlayers, newData]);
    toast.success(`${newData.name} selected successfully!`);
  };

  const handleUnSelect = (value: number) => {
    const newData = selectedPlayers.filter((item) => {
      return item.id !== value;
    });
    const removeData = selectedPlayers.find((item)=>{
      return item.id === value
    })
    setSelecteddPlayer(newData);
    toast.warn(`${removeData?.name} is Removed`)
  };

  return (
    <div className="container mx-auto py-20 px-8 flex flex-col gap-5">
      <PlayerTitle />
      <div className="flex justify-between gap-10 flex-col-reverse md:flex-row ">
        <UnselectedPlayers
          data={datas}
          handleSelectPLayer={handleSelectPLayer}
          selectedPlayers={selectedPlayers}
        />
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          handleUnSelect={handleUnSelect}
        />
      </div>
    </div>
  );
};

export default Players;
