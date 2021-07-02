const OPEN = "watchlist/open";
const CLOSE = "watchlist/close";

export const openWatchlist = (open) => {
  return {
    type: OPEN,
    open,
  }
}

const initialState = { open: false };

const reducer = (state = initialState, action) => {
  let newState = { open: false };
  switch (action.type) {
    case OPEN:
      newState.open = action.open;
      return newState;
    default:
      return state;
  }
}

export default reducer;
