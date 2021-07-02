const SET_WATCHLIST = "watchlist/getDiscs"
const ADD_TO_WATCHLIST = "watchlist/addDisc"
const REMOVE_FROM_WATCHLIST = "watchlist/removeDisc"

const setWatctlist = (discs) => ({
  type: SET_WATCHLIST,
  discs,
})

const addToWatchlist = (disc) => ({
  type: ADD_TO_WATCHLIST,
  disc,
})

const removeFromWatchlist = (disc) => ({
  type: REMOVE_FROM_WATCHLIST,
  disc
})

export const getWatchlistDiscs = (userId) => async (dispatch) => {
  const res = await fetch(`/api/watchlist/${userId}`);
  const data = await res.json();

  const discs = Object.values(data.discs)
  const discsArr = []
  for (let i = 0; i < discs.length; i++) {
    const discObj = await fetch(`/api/discs/${discs[i].disc_id}`)
    const discRes = await discObj.json();
    discsArr.push(discRes)
  }
  dispatch(setWatctlist(discsArr))
  return data.discs
}

export const addDiscToWatchlist = (userId, discId) => async (dispatch) => {
  const res = await fetch(`/api/watchlist/${userId}/${discId}`, {
    method: 'POST',
  })
  const data = await res.json()
  const newDisc = await fetch(`/api/discs/${data.disc_id}`)
  const newDiscData = await newDisc.json()
  dispatch(addToWatchlist(newDiscData))
}

export const removeDiscFromWatchlist = (userId, discId) => async (dispatch) => {
  const res = await fetch(`/api/watchlist/${userId}/${discId}`, {
    method: "DELETE"
  })
  const data = await res.json()
  const newDisc = await fetch(`/api/discs/${data.disc_id}`)
  const newDiscData = await newDisc.json()
  dispatch(removeFromWatchlist(newDiscData))
}

const initialState = {}

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_WATCHLIST:
      newState = { ...state };
      action.discs.forEach((disc) => {
        newState[disc.id] = disc
      })
      return newState;
    case ADD_TO_WATCHLIST:
      newState = { ...state }
      newState[action.disc.id] = action.disc
      return newState;
    case REMOVE_FROM_WATCHLIST:
      newState = { ...state };
      delete newState[action.disc.id]
      return newState;
    default:
      return state;
  }
}

export default reducer
