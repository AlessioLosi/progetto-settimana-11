export const PLAY_SONG = 'PLAY_SONG';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';
export const GET_SONGS = 'GET_SONGS';

export const playSong = (song) => ({
  type: PLAY_SONG,
  payload: song,
});

export const toggleLike = (songId) => ({
  type: TOGGLE_LIKE,
  payload: songId,
});
 export const getSongsAction = (query) => {
            return async (dispatch) => {
              try {
                const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + query )
                if (response.ok) {
                  const { data } = await response.json()
                  dispatch({
                    type: GET_SONGS,
                    payload: data,
                  })
                } else {
                  alert('Error fetching results')
                }
              } catch (error) {
                console.log(error)
              }
            }
          }