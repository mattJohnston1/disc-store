const OPEN = "bag/open";
const CLOSE = "bag/close";

export const openBag = () => {
  return {
    type: OPEN,
  }
}

export const closeBag = () => {
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
