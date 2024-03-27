import { iPlayer } from '../../App'

const Player = ({
  player,
  onSetFavoritePlayers,
  isFavPlayer,
}: {
  player: iPlayer,
  onSetFavoritePlayers: (id: number) => void,
  isFavPlayer: boolean,
}) => {
  return (
    <li className="p-3 relative w-full md:w-1/2">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="absolute top-5 right-5">
          <button onClick={() => onSetFavoritePlayers(player.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${isFavPlayer ? "fill-yellow-500" : "" }`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{player.first_name} {player.last_name}</h2>
        <div>
          <span>College: </span>
          <span>{player.college}</span>
        </div>
        <div>
          <span>Country: </span>
          <span>{player.country}</span>
        </div>
        <div>
          <span>Draft number: </span>
          <span>{player.draft_number}</span>
        </div>
        <div>
          <span>Draft round: </span>
          <span>{player.draft_round}</span>
        </div>
        <div>
          <span>Draft year: </span>
          <span>{player.draft_year}</span>
        </div>
        <div>
          <span>Height: </span>
          <span>{player.height}</span>
        </div>
        <div>
          <span>Jersey number: </span>
          <span>{player.jersey_number}</span>
        </div>
        <div>
          <span>Position: </span>
          <span>{player.position}</span>
        </div>
        <div>
          <span>Division: </span>
          <span>{player.team?.division}</span>
        </div>
        <div>
          <span>Team: </span>
          <span>{player.team?.full_name}</span>
        </div>
      </div>
    </li>
  )
}

export default Player
