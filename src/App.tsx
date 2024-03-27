import React, { useEffect, useState } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList'
import Filter from './components/Filter/Filter'
import Header from './components/Header/Header'
import Spinner from './components/Spinner/Spinner'

import playersService from './services/players'

interface iTeam {
  abbreviation: string
  city: string
  conference: string
  division: string
  full_name: string
  id: number
  name: string
}

export interface iPlayer {
  college: string
  country: string
  draft_number: number
  draft_round: number
  draft_year: number
  first_name: string
  height: string
  id: number
  jersey_number: string
  last_name: string
  position: string
  team: iTeam
  weight: string
}

function App() {
  const [players, setPlayers] = useState<iPlayer[]>([]);
  const [isPlayersLoading, setIsPlayersLoading] = useState<boolean>(false);
  const [favoritePlayers, setFavoritePlayers] = useState<iPlayer[]>([]);
  const [filterStr, setFilterStr] = useState('')
  const matchPlayers = players.filter(p => p.first_name.toUpperCase().includes(filterStr.toUpperCase()) || 
    p.last_name.toUpperCase().includes(filterStr.toUpperCase()))

  useEffect(() => {
    setIsPlayersLoading(true);
    playersService
      .getPlayers()
        .then(playersList => {
          setPlayers(playersList.data)
          setIsPlayersLoading(false);
        })
        .catch(err => {
          console.log(err)
          setIsPlayersLoading(false);
        })
  }, [])

  const filterData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterStr(e.target?.value)
  }

  const handleSetFavoritePlayers = (id: number) => {
    const clickedPlayer = players.find(p => p.id === id);
    const isFavoritePlayer = favoritePlayers.findIndex(p => p.id === id);

    if (isFavoritePlayer === -1 && clickedPlayer) {
      setFavoritePlayers([
        ...favoritePlayers,
        clickedPlayer
      ]);
    } else {
      setFavoritePlayers([
        ...favoritePlayers.filter(p => p.id !== id),
      ]);
    }
  }

  return (
    <div className="App">
      <div className="mainContainer flex flex-col">
        <Header />
        {isPlayersLoading && (
          <div className="container mx-auto flex-1 flex justify-center items-center pt-5 pb-5">
            <Spinner />
          </div>
        )}
        {!players.length && !isPlayersLoading && <div>No data</div>}
        {!!players.length &&
          <div className="pageContent">
            <div className="container mx-auto flex flex-row pt-5 pb-5">
              <Filter filterStr={filterStr} filterData={filterData}/>
            </div>
            <div className="container mx-auto flex flex-row">
              <PlayersList players={matchPlayers} favoritePlayers={favoritePlayers} onSetFavoritePlayers={handleSetFavoritePlayers} listTitle="NBA players" />
              <PlayersList players={favoritePlayers} onSetFavoritePlayers={handleSetFavoritePlayers} listTitle="Your favorite players" withColorPicker={true} />
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
