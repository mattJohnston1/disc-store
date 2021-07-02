const OPEN = "watchlist/open";
const CLOSE = "watchlist/close";

export const openWatchlist = () => {
  return {
    type: OPEN,
  }
}

export const closeWatchlist = () => {
  return {
    type: CLOSE,
  }
}

const initialState = { open: false };

const reducer = (state = initialState, action) => {
  let newState = { open: false };
  switch (action.type) {
    case OPEN:
      newState.open = true;
      return newState;
    case CLOSE:
      newState.open = false;
      return newState;
    default:
      return state;
  }
}

export default reducer;
