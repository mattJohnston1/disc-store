const SET_FILTERED_DISCS = 'discs/setFilteredDiscs';

export const setFilteredDiscs = (discs) => ({
  type: SET_FILTERED_DISCS,
  discs,
})

export const filterDiscs = (discs, brandFilter, typeFilter, speedFilter, glideFilter, turnFilter, fadeFilter) => async (dispatch) => {
  let filteredCopy = [];
  let filtered = [];
  for (let i = 0; i < discs.length; i++) {
    filteredCopy.push(JSON.parse(JSON.stringify(discs[i])))
  }

  if (speedFilter.length) {
    speedFilter.forEach((speed) => {
      let newFilterArr = filteredCopy.filter((disc) => {
        if (disc.speed === speed) {
          console.log("TRUE", disc.speed, speed)
          return true;
        } else {
          console.log("FALSE", disc.speed, speed)
          return false
        }
      })
      filtered = [...filtered, ...newFilterArr]
      // console.log("NEW FILTER SPEED", newFilterArr)
    })
    dispatch(setFilteredDiscs(filtered))
  } else {
    dispatch(setFilteredDiscs(filteredCopy))
  }
}

export const getFilterDiscs = (brand, type, id) => async (dispatch) => {
  let res = null;
  if (brand === true) {
    res = await fetch(`/api/discs/brand/${id}`)
  } else if (type === true) {
    res = await fetch(`/api/discs/type/${id}`)
  } else {
    res = await fetch('/api/discs');
  }
  const data = await res.json();
  dispatch(setFilteredDiscs(data.discs))
  return data.discs;
}

function reducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case SET_FILTERED_DISCS:
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
