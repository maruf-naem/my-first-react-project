import type { PlayerType } from "../../../../PlayerType";

interface SelectedPlayerProps {
  SelectedPlayer: PlayerType;
  handleUnSelect: (value:number)=>void
}

const SelectedPlayerCard = ({
  SelectedPlayer,
  handleUnSelect
}: SelectedPlayerProps) => {
  return (
    <div className="group flex w-full min-w-0 items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-200 hover:shadow-md">
      <div className="relative shrink-0">
        <img
          src={SelectedPlayer.image}
          alt={SelectedPlayer.name}
          className="h-14 w-14 rounded-full object-cover ring-2 ring-gray-100 transition-all duration-200 group-hover:ring-gray-200"
        />

        <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
      </div>
      <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-gray-900">
            {SelectedPlayer.name}
          </h3>
          <div className="mt-1 flex items-center gap-2">
            <span className="rounded-md bg-gray-100 px-2 py-0.5 text-[11px] font-medium text-gray-500">
              {SelectedPlayer.position}
            </span>
            <span className="text-xs text-gray-400">Selected</span>
          </div>
        </div>
        <button
          type="button"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl text-gray-400 transition-all duration-200 hover:bg-red-50 hover:text-red-500"
          onClick={() => {
            handleUnSelect(SelectedPlayer.id);
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayerCard;
