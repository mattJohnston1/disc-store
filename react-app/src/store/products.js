const ADD_PRODUCT = "products/addProduct"
const REMOVE_BY_INDEX = "products/removeProductByIndex"
const ADD_DISC_BY_INDEX = "products/IncDisc"
const REDUCE_DISC_BY_INDEX = "products/DecDisc"

export const addProduct = (disc) => ({
  type: ADD_PRODUCT,
  disc,
})

export const addDiscByIndex = (idx) => ({
  type: ADD_DISC_BY_INDEX,
  idx,
})

export const reduceDiscByIndex = (idx) => ({
  type: REDUCE_DISC_BY_INDEX,
  idx,
})

export const removeByIndex = (idx) => ({
  type: REMOVE_BY_INDEX,
  idx,
})

//add a delete function and an add to the amoounts based off an index
const initialState = { amounts: [], products: [], total: 0.0 }

function reducer(state = initialState, action) {
  let newState;
  let idx;
  switch (action.type) {
    case ADD_DISC_BY_INDEX:
      newState = { ...state };
      idx = action.idx;
      newState.amounts[idx] += 1;
      newState.total = 0.0
      newState.products.forEach((product, idx) => {
        newState.total += product.price * newState.amounts[idx]
      })
      return newState;
    case REDUCE_DISC_BY_INDEX:
      newState = { ...state };
      idx = action.idx;
      newState.amounts[idx] -= 1;
      if (newState.amounts[idx] === 0) {
        delete newState[idx]
        newState.amounts.splice(idx, 1);
        newState.products.splice(action.idx, 1)
      }
      newState.total = 0.0
      newState.products.forEach((product, idx) => {
        newState.total += product.price * newState.amounts[idx]
      })
      return newState;
    case ADD_PRODUCT:
      newState = { ...state };
      if (!newState.products.includes(action.disc)) {
        newState[Object.values(newState).length - 3] = action.disc
        newState.amounts.push(1)
        newState.products.push(action.disc)
      } else {
        let idx = newState.products.discIndexOf(action.disc)
        newState.amounts[idx] += 1;
      }
      newState.total = 0.0
      newState.products.forEach((product, idx) => {
        newState.total += product.price * newState.amounts[idx]
      })
      return newState;
    case REMOVE_BY_INDEX:
      newState = { ...state };
      delete newState[action.idx]
      newState.amounts.splice(action.idx, 1);
      newState.products.splice(action.idx, 1)
      newState.total = 0.0
      newState.products.forEach((product, idx) => {
        newState.total += product.price * newState.amounts[idx]
      })
      return newState;
    default:
      return state;
  }
}

export default reducer;
