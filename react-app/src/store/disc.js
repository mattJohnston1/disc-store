const SET_DISC = 'discs/setDisc'

const setDisc = (disc) => ({
  type: SET_DISC,
  disc,
})


export const getDisc = (id) => async (dispatch) => {
  const res = await fetch(`/api/discs/${id}`);
  const data = await res.json();
  dispatch(setDisc(data))
  return data;
}


function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case SET_DISC:
      newState = {};
      newState['disc'] = action.disc;
      return newState;
    default:
      return state;
  }
}

export default reducer
