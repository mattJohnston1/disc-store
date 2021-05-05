const ADD_DISC = 'bag/addDisc';
const ADD_DISC_BY_INDEX = 'bag/addDiscByIndex';
const REMOVE_BY_INDEX = 'bag/removeDiscByIndex';
const REDUCE_DISC_BY_INDEX = 'bag/reduceDiscByIndex';

export const addDisc = (disc) => ({
  type: ADD_DISC,
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

Array.prototype.hasDisc = function (incomingDisc) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].name === incomingDisc.name) return true
  }
  return false
}

Array.prototype.discIndexOf = function (incomingDisc) {
  let index = 0;
  for (let i = 0; i < this.length; i++) {
    if (this[i].name === incomingDisc.name) {
      return index;
    } else {
      index++;
    }
  }
  return null;
}

const localStorage = window.localStorage;

//add a delete function and an add to the amoounts based off an index
const initialState = { products: [], amounts: [], total: 0.0 }

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
      newState.total = 0.0
      newState.products.forEach((product, idx) => {
        newState.total += product.price * newState.amounts[idx]
      })
      return newState;
    case ADD_DISC:
      newState = { ...state };
      if (!newState.products.hasDisc(action.disc)) {
        newState.products.push(action.disc);
        newState.amounts.push(1);
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
      newState.products.splice(action.idx, 1);
      newState.amounts.splice(action.idx, 1);
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
