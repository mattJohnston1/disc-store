const ADD_DISC_BY_INDEX = "bag/addProductByIndex"
const REDUCE_DISC_BY_INDEX = "bag/reduceProductByIndex"


// export const addDiscByIndex = (idx) => ({
//   type: ADD_DISC_BY_INDEX,
//   idx,
// })

// export const reduceDiscByIndex = (idx) => ({
//   type: REDUCE_DISC_BY_INDEX,
//   idx,
// })


//add a delete function and an add to the amoounts based off an index
const initialState = {}

function reducer(state = initialState, action) {
  let newState;
  let idx;
  switch (action.type) {
    // case ADD_DISC_BY_INDEX:
    //   newState = { ...state };
    //   idx = action.idx;
    //   newState.amounts[idx] += 1;
    //   newState.total = 0.0
    //   newState.products.forEach((product, idx) => {
    //     newState.total += product.price * newState.amounts[idx]
    //   })
    //   return newState;
    // case REDUCE_DISC_BY_INDEX:
    //   newState = { ...state };
    //   idx = action.idx;
    //   newState.amounts[idx] -= 1;
    //   newState.total = 0.0
    //   newState.products.forEach((product, idx) => {
    //     newState.total += product.price * newState.amounts[idx]
    //   })
    //   return newState;
    case ADD_PRODUCT:
      newState = { ...state };
      newState[Object.values(newState).length] = action.disc
      return newState;
    case REMOVE_BY_INDEX:
      newState = { ...state };
      delete newState[action.idx]
      return newState;
    default:
      returnstate;
  }
}

export default reducer;
