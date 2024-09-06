import { GET_SONGS } from "../actions/Actions"

const initialState = {
  available: [],
}

const braniReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS:
      return {
        ...state,
        available: action.payload, 
      }

    default:
      return state
  }
}

export default braniReducer