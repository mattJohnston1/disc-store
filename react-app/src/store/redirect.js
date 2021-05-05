const SAVE = "redirect/save";

export const savePage = (page) => {
  return {
    type: SAVE,
    page
  }
}



const initialState = { page: null};

const reducer = (state = initialState, action) => {
  let newState = { page: null };
  switch (action.type) {
    case SAVE:
      newState.page = action.page;
      return newState;
    default:
      return state;
  }
}

export default reducer;
