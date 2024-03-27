import axios from 'axios'
const GET_PLAYERS_URL = 'https://api.balldontlie.io/v1/players'

const getPlayers = () => {
  const request = axios.get(GET_PLAYERS_URL, { headers: { Authorization: process.env.REACT_APP_API_KEY }} );
  return request.then(response => response.data)
}

export default {
  getPlayers
};