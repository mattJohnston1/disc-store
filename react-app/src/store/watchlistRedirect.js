const WATCHLIST_REDIRECT = "watchlist/redirect";

export const redirectTo = (discId) => ({
  type: WATCHLIST_REDIRECT,
  discId
})

const initialState = { discId: null }

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case WATCHLIST_REDIRECT:
      newState = { ...state }
      newState.discId = action.discId;
      return newState;
    default:
      return state;
  }
}

export default reducer
