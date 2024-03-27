import { useState } from 'react'
import { iPlayer } from '../../App'
import Player from '../Player/Player'
import { PopoverPicker } from '../PopoverColorPicker/PopoverColorPicker'

const PlayersList = ({
  players,
  favoritePlayers,
  onSetFavoritePlayers,
  listTitle = "",
  withColorPicker = false,
}: {
  players: iPlayer[],
  favoritePlayers?: iPlayer[],
  onSetFavoritePlayers: (id: number) => void,
  listTitle?: string,
  withColorPicker?: boolean
}) => {
  const [color, setColor] = useState("");
  const handleSetColor = (c: string) => setColor(c);

  return (
    <div className="basis-1/2 container mx-auto flex flex-col" style={{backgroundColor: `${color}`}}>
      { withColorPicker && (
        <div className="pb-3 flex flex-col items-center">
          <h4 className="pb-2 text-pink-200">Pick background color for the list</h4>
          <PopoverPicker color={color} onChange={handleSetColor} />
        </div>
      )}
      <h3 className="font-medium text-pink-200">{listTitle}</h3>
      <ul className="PlayersList flex flex-wrap">
        {!!players.length && players.map((player) => {
          const isFavPlayer = favoritePlayers?.findIndex(p => p.id === player.id);

          return <Player key={player.id} player={player} onSetFavoritePlayers={onSetFavoritePlayers} isFavPlayer={isFavPlayer !== -1} />
        })}
      </ul>
    </div>
  )
}

export default PlayersList
