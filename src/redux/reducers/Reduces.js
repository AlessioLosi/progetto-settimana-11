import { PLAY_SONG } from "../actions/Actions";
import { TOGGLE_LIKE } from "../actions/Actions";

const initialState = {
  list: [],
  currentSong: null,
  likedSongs: [],
  status: 'idle',
};

const playSongReducer = (state, action) => {
  state.currentSong = action.payload;
};

const toggleLikeReducer = (state, action) => {
  const songId = action.payload;
  if (state.likedSongs.includes(songId)) {
    state.likedSongs = state.likedSongs.filter(id => id !== songId);
  } else {
    state.likedSongs.push(songId);
  }
};


const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      return playSongReducer(state, action);
    case TOGGLE_LIKE:
      return toggleLikeReducer(state, action);
    default:
      return state;
  }
};
export const getSongsAction = () => {
    return (dispatch, getState) => {
      fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' +{query})
        .then((response) => {
          if (response.ok) {
            return response.json()
          } else {
            throw new Error('errore nel recupero dei libri')
          }
        })
        .then((arrayOfBooks) => {
          dispatch({
            type: GET_SONGS,
            payload: arrayOfSongs,
          })
        })
        .catch((err) => {
          console.log(err)
        })}}

export default songsReducer;

