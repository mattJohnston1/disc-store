const ADD_DISC = 'bag/addDisc';

export const addDisc = (disc) => ({
  type: ADD_DISC,
  disc,
})


const initialState = { products: [], amounts: [] }

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case ADD_DISC:
      newState = { ...state };
      if (!newState.products.includes(action.disc)) {
        newState.products.push(action.disc);
        newState.amounts.push(1);
      } else {
        let idx = newState.products.indexOf(action.disc)
        newState.amounts[idx] += 1;
      }
      return newState;
    default:
      return state;
  }
}

export default reducer;
