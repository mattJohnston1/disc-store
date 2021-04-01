const SET_DISCS = 'discs/setDiscs'

const setDiscs = (discs) => ({
  type: SET_DISCS,
  discs,
})


export const getDiscs = (type, stability, id) => async (dispatch) => {
  let res = null;
  if (type === true) {
    res = await fetch(`api/discs/type/${id}`)
  } else if (stability === true) {
    res = await fetch(`api/discs/stability/${id}`)
  } else {
    res = await fetch('/api/discs');
  }
  const data = await res.json();
  dispatch(setDiscs(data.discs))
  return data.discs;
}


function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case SET_DISCS:
      newState = {};
      action.discs.forEach(disc => {
        newState[disc.id] = disc;
      })
      return newState;
    default:
      return state;
  }
}

export default reducer
