const SET_IMAGE = "image/setImage"

export const setImage = (id) => {
  return {
    type: SET_IMAGE,
    id,
  }
}

const initialState = { image: 0 };

const reducer = (state = initialState, action) => {
  let newState = { image: 0 };
  switch (action.type) {
    case SET_IMAGE:
      newState.image = action.id;
      return newState;
    default:
      return state;
  }
}

export default reducer;
