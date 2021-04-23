const SET_FILTERED_DISCS = 'discs/setFilteredDiscs';

export const setFilteredDiscs = (discs) => ({
  type: SET_FILTERED_DISCS,
  discs,
})

export const filterDiscs = (discs, brandFilter, typeFilter, speedFilter, glideFilter, turnFilter, fadeFilter, unfiltered) => async (dispatch) => {
  let filtered = [];
  let discsCopy = [];
  discs.forEach((disc) => {
    discsCopy.push(JSON.parse(JSON.stringify(disc)))
  })

  if (brandFilter.length) {
    brandFilter.forEach((brandId) => {
      let newFilterArr = discsCopy.filter((disc) => {
        if (disc.brand_id === brandId) {
          return true;
        } else {
          return false;
        }
      })
      // console.log("1", newFilterArr)
      filtered = [...filtered, ...newFilterArr]
    })
    discsCopy = [...filtered]
    // filtered = []
    // dispatch(setFilteredDiscs(filtered))

  }
  if (speedFilter.length) {
    console.log("discsCopy::", discsCopy)
    console.log("filtered::", filtered)
    filtered = []
    speedFilter.forEach((speed) => {
      let newFilterArr = discsCopy.filter((disc) => {
        if (disc.speed === speed) {
          return true;
        } else {
          return false
        }
      })
      filtered = [...filtered, ...newFilterArr]
    })
    // dispatch(setFilteredDiscs(filtered))
  }
  // else if (typeFilter.length) {
  //   typeFilter.forEach((typeId) => {
  //     let newFilterArr = discsCopy.filter((disc) => {
  //       if (disc.type_id === typeId) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     })
  //     filtered = [...filtered, ...newFilterArr]
  //   })
  //   dispatch(setFilteredDiscs(filtered))
  // } else if (glideFilter.length) {
  //   glideFilter.forEach((glide) => {
  //     let newFilterArr = discsCopy.filter((disc) => {
  //       if (disc.glide === glide) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     })
  //     filtered = [...filtered, ...newFilterArr]
  //   })
  //   dispatch(setFilteredDiscs(filtered))
  // } else if (turnFilter.length) {
  //   turnFilter.forEach((turn) => {
  //     let newFilterArr = discsCopy.filter((disc) => {
  //       if (disc.turn === turn) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     })
  //     filtered = [...filtered, ...newFilterArr]
  //   })
  //   dispatch(setFilteredDiscs(filtered))
  // } else if (fadeFilter.length) {
  //   fadeFilter.forEach((fade) => {
  //     let newFilterArr = discsCopy.filter((disc) => {
  //       if (disc.fade === fade) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     })
  //     filtered = [...filtered, ...newFilterArr]
  //   })
  //   dispatch(setFilteredDiscs(filtered))
  // }
  // else {
  //   dispatch(setFilteredDiscs(unfiltered))
  // }
  dispatch(setFilteredDiscs(filtered))
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
