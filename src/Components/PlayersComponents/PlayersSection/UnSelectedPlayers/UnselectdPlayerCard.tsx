
import type { PlayerType } from "../../../../PlayerType";

interface PlayerProps {
  player: PlayerType;
  handleSelectPLayer: (value: number) => void;
  isSelected: boolean
}

const UnselectdPlayerCard = ({
  player,
  handleSelectPLayer,
  isSelected
}: PlayerProps) => {
  return (
    <div className="card bg-base-100 w-full max-w-xs shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Player Image */}
      <figure className="relative bg-gray-100">
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-44 object-cover"
        />

        <div className="absolute top-2 right-2 badge badge-warning badge-sm font-semibold">
          ⭐ {player.rating}
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body p-4">
        {/* Name + Jersey */}
        <div className="flex justify-between items-start gap-2">
          <div className="min-w-0">
            <h2 className="font-bold text-lg truncate">{player.name}</h2>

            <p className="text-xs text-gray-500 truncate">
              {player.club} · {player.league}
            </p>
          </div>

          <span className="badge badge-primary badge-sm shrink-0">
            #{player.jerseyNumber}
          </span>
        </div>

        {/* Bio */}
        <p className="text-xs text-gray-600 line-clamp-2 mt-1">{player.bio}</p>

        {/* Player Details */}
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="bg-gray-50 rounded-md p-2">
            <p className="text-[10px] text-gray-500">Nationality</p>
            <p className="font-semibold text-xs flex items-center gap-1">
              <img
                src={`https://flagcdn.com/w40/${player.flag.toLowerCase()}.png`}
                alt={player.nationality}
                className="w-5 h-4 object-cover"
              />
              {player.nationality}
            </p>
          </div>

          <div className="bg-gray-50 rounded-md p-2">
            <p className="text-[10px] text-gray-500">Position</p>
            <p className="font-semibold text-xs">{player.position}</p>
          </div>

          <div className="bg-gray-50 rounded-md p-2">
            <p className="text-[10px] text-gray-500">Foot</p>
            <p className="font-semibold text-xs">{player.preferredFoot}</p>
          </div>

          <div className="bg-gray-50 rounded-md p-2">
            <p className="text-[10px] text-gray-500">Height</p>
            <p className="font-semibold text-xs">{player.height}</p>
          </div>

          <div className="bg-gray-50 rounded-md p-2">
            <p className="text-[10px] text-gray-500">Birth</p>
            <p className="font-semibold text-xs">{player.dateOfBirth}</p>
          </div>

          <div className="bg-gray-50 rounded-md p-2">
            <p className="text-[10px] text-gray-500">League</p>
            <p className="font-semibold text-xs truncate">{player.league}</p>
          </div>
        </div>

        {/* Select Button */}
        <button
          className="btn btn-primary btn-sm w-full mt-2"
          onClick={() => {
            handleSelectPLayer(player.id);
          }}
          disabled={isSelected}
        >
          {isSelected ? "Selected" : "Select"}
        </button>
      </div>
    </div>
  );
};

export default UnselectdPlayerCard;
